import React from 'jsx-dom';

import { FC } from '@core/types';
import { useState } from '@core/hooks/useState';
import { Modal } from '@src/shared/components/modal';
import { ModuleItem } from '@src/shared/components/moduleItem';

import { modules } from '@src/modules';
import { initMenu } from './utils/initMenu';
import styles from './styles.scss';

export const App: FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const show = () => setIsOpened(true);
  const hide = () => setIsOpened(false);

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
