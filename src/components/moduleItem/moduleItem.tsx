import React from 'jsx-dom';

import { Toggle } from '@src/components/toggle';

import styles from './moduleItem.scss';

type ModuleItemConstructor = {
  title: string;
  description?: string;
  onEnable: () => void;
  onDisable: () => void;
};

interface IModuleItem {
  render: () => JSX.Element;
}

class ModuleItem implements IModuleItem {
  private readonly title: string;
  private readonly description?: string;
  private readonly onDisable: () => void;
  private readonly onEnable: () => void;

  constructor({ onDisable, onEnable, title, description }: ModuleItemConstructor) {
    this.title = title;
    this.description = description;
    this.onDisable = onDisable;
    this.onEnable = onEnable;
  }

  private renderAction() {
    const toggle = new Toggle({
      left: {
        title: 'Выкл',
        onClick: this.onDisable,
      },
      right: {
        title: 'Вкл',
        onClick: this.onEnable,
      },
      initialState: 'left',
    });
    return <div className={styles.action}>{toggle.render()}</div>;
  }

  render() {
    return (
      <li className={styles.item}>
        <div className={styles.info}>
          <div className={styles.title}>{this.title}</div>
          {this.description && <div className={styles.description}>{this.description}</div>}
        </div>
        <div className={styles.action}>{this.renderAction()}</div>
      </li>
    );
  }
}

export { ModuleItem };
