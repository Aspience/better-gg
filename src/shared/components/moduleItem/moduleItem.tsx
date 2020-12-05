import React from 'jsx-dom';

import { FC } from '@src/shared/core/types';

import { Toggle } from '@src/shared/components/toggle';

import styles from './moduleItem.scss';

type Props = {
  title: string;
  description?: string;
  onEnable: () => void;
  onDisable: () => void;
};

export const ModuleItem: FC<Props> = ({ title, description, onDisable, onEnable }) => {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        {description && <div className={styles.description}>{description}</div>}
      </div>
      <div className={styles.action}>
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
};
