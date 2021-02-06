import { FunctionalComponent } from 'vue';

import { Toggle } from '@src/shared/components/toggle';
import { ModuleSettings } from '@src/shared/store/types';

import styles from './moduleItem.scss';

type Props = {
  title: string;
  settings: ModuleSettings;
  description?: string;
  onEnable: Function;
  onDisable: Function;
};

export const ModuleItem: FunctionalComponent<Props> = ({
  description,
  onDisable,
  onEnable,
  title,
  settings,
}) => {
  return (
    <li class={styles.item}>
      <div class={styles.info}>
        <div class={styles.title}>{title}</div>
        {description && <div class={styles.description}>{description}</div>}
      </div>
      <div class={styles.action}>
        <Toggle
          state={settings.enabled ? 'right' : 'left'}
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
};
