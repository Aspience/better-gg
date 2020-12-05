import React from 'jsx-dom';

import { ModuleItem } from '@src/components/moduleItem';

import { modules } from '@src/modules';

import styles from '@src/styles/general.scss';

const renderModulesList = (): JSX.Element => {
  const items: ModuleItem[] = modules.map(item => {
    return new ModuleItem({
      description: item.description,
      title: item.title,
      onEnable: item.onInit,
      onDisable: item.onDestroy,
    });
  });

  return <ul className={styles.modulesList}>{items.map(item => item.render())}</ul>;
};

export { renderModulesList };
