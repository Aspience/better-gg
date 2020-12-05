import React from 'jsx-dom';

import { FC } from '@src/shared/core/types';
import { Modal } from '@src/shared/components/modal';
import { ModuleItem } from '@src/shared/components/moduleItem';
import { modules } from '@src/modules';

import { initMenu } from './utils/initMenu';
import styles from './styles.scss';

export const App: FC = () => {
  const isOpened = false;
  const show = () => {};
  const hide = () => {};

  initMenu({ onClick: show });

  const renderModulesList = () => {
    return (
      <ul className={styles.modulesList}>
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

  return (
    <Modal title="Better GG" isOpened={isOpened} show={show} hide={hide}>
      {renderModulesList()}
    </Modal>
  );
};
