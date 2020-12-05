import React from 'jsx-dom';

import { FC } from '@core/types';
import { react } from '@core/react';

import { Modal } from '@src/shared/components/modal';
import { ModuleItem } from '@src/shared/components/moduleItem';
import { modules } from '@src/modules';

import { initMenu } from './utils/initMenu';
import styles from './styles.scss';

export const App: FC = () => {
  const modal = react({ isOpened: false });
  const show = () => {
    modal.isOpened = true;
  };
  const hide = () => {
    modal.isOpened = false;
  };

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
    <Modal title="Better GG" isOpened={modal.isOpened} show={show} hide={hide}>
      {renderModulesList()}
    </Modal>
  );
};
