import { defineComponent } from 'vue';

import { Modal } from '@src/shared/components/modal';
import { ModuleItem } from '@src/shared/components/moduleItem';

import { getLocalStorageState } from '@src/shared/store/utils/getLocalStorageState';
import { dispatchModuleSettings } from '@src/shared/store/utils/dispatchModuleSettings';
import { modules } from '@src/modules';
import { Module, ModuleName } from '@src/modules/types';

import { initMenu } from './utils/initMenu';
import styles from './styles.scss';

export const App = defineComponent({
  name: 'App',
  data() {
    return {
      appShown: false,
      store: getLocalStorageState(),
    };
  },
  mounted() {
    initMenu({ onClick: () => this.showModal() });
    this.processEnabledModules('init');
  },
  unmounted() {
    this.processEnabledModules('destroy');
  },
  methods: {
    showModal() {
      this.appShown = true;
    },
    hideModal() {
      this.appShown = false;
    },
    processEnabledModules(action: 'init' | 'destroy') {
      if (this.store.enabled) {
        (Object.keys(this.store.modules) as ModuleName[]).map(name => {
          if (this.store.modules[name].enabled) {
            const module = modules.find(item => item.name === name);
            if (action === 'init') {
              module?.onInit();
            } else {
              module?.onDestroy();
            }
          }
        });
      }
    },
    onModuleEnable(module: Module<ModuleName>) {
      const { name } = module;
      module.onInit(() => {
        this.store.modules[name].enabled = true;
        dispatchModuleSettings(name, { enabled: true });
      });
    },
    onModuleDisable(module: Module<ModuleName>) {
      const { name } = module;
      module.onDestroy(() => {
        this.store.modules[name].enabled = false;
        dispatchModuleSettings(name, { enabled: false });
      });
    },
  },
  render() {
    return (
      <Modal title="BetterGG" isOpened={this.appShown} show={this.showModal} hide={this.hideModal}>
        <ul class={styles.modulesList}>
          {modules.map(module => {
            const { title, description, name } = module;
            return (
              <ModuleItem
                title={title}
                description={description}
                onDisable={() => this.onModuleDisable(module)}
                onEnable={() => this.onModuleEnable(module)}
                settings={this.store.modules[name]}
              />
            );
          })}
        </ul>
      </Modal>
    );
  },
});
