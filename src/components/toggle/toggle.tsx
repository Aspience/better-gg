import React from 'jsx-dom';

import styles from './toggle.scss';

type ToggleState = 'left' | 'right';

type ToggleItem = {
  title: string;
  onClick: () => void;
};

type ToggleConstructor = {
  initialState: ToggleState;
  left: ToggleItem;
  right: ToggleItem;
};

interface IToggle {
  render: () => JSX.Element;
}

class Toggle implements IToggle {
  private readonly currentState: ToggleState;
  private left: ToggleItem;
  private right: ToggleItem;

  constructor({ initialState, left, right }: ToggleConstructor) {
    this.currentState = initialState;
    this.left = left;
    this.right = right;
  }

  render() {
    return (
      <div class={`mobile-switch ${styles.toggle}`}>
        <a
          class={`${this.currentState === 'left' && 'active'} ${styles.item}`}
          onClick={this.left.onClick}
        >
          {this.left.title}
        </a>
        <a
          class={`${this.currentState === 'right' && 'active'} ${styles.item}`}
          onClick={this.right.onClick}
        >
          {this.right.title}
        </a>
      </div>
    );
  }
}

export { Toggle };
