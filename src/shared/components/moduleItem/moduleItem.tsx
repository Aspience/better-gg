import { defineComponent, FunctionalComponent } from 'vue';

import { Toggle } from '@src/shared/components/toggle';
import styles from './moduleItem.scss';

type Props = {
  title: string;
  description?: string;
  onEnable: Function;
  onDisable: Function;
};

export const ModuleItem = defineComponent<Props>({
  setup({ title, description, onEnable, onDisable }) {
    return () => (
      <li class={styles.item}>
        <div class={styles.info}>
          <div class={styles.title}>{title}</div>
          {description && <div class={styles.description}>{description}</div>}
        </div>
        <div class={styles.action}>
          <Toggle
            state="left"
            left={{
              title: 'Выкл',
              onClick: onDisable,
            }}
            right={{
              title: 'Вкл',
              onClick: onEnable,
            }}
          />
        </div>
      </li>
    );
  },
});
