import { defineComponent, reactive, onMounted } from 'vue';

import { Modal } from '@src/shared/components/modal';
import { ModuleItem } from '@src/shared/components/moduleItem';
import { modules } from '@src/modules';

import { initMenu } from './utils/initMenu';
import styles from './styles.scss';

export const App = defineComponent({
  setup() {
    const modal = reactive({ isOpened: false });
    const hideModal = () => {
      modal.isOpened = false;
    };
    const showModal = () => {
      modal.isOpened = true;
    };
    onMounted(() => {
      initMenu({ onClick: () => showModal() });
    });

    return {
      isOpened: modal.isOpened,
      showModal,
      hideModal,
    };
  },
  render() {
    const renderModulesList = () => {
      return (
        <ul class={styles.modulesList}>
          {modules.map(({ title, onInit, onDestroy, description }) => (
            <ModuleItem
              title={title}
              description={description}
              onDisable={onDestroy}
              onEnable={onInit}
            />
          ))}
        </ul>
      );
    };

    return () => (
      <Modal title="Better GG" isOpened={this.isOpened} show={this.showModal} hide={this.hideModal}>
        {renderModulesList()}
      </Modal>
    );
  },
});
