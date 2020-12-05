import React from 'jsx-dom';

import { FC } from '@src/shared/core/types';

import styles from './toggle.scss';

type ToggleState = 'left' | 'right';

type ToggleItem = {
  title: string;
  onClick: () => void;
};

type Props = {
  state: ToggleState;
  left: ToggleItem;
  right: ToggleItem;
};

export const Toggle: FC<Props> = ({ state, left, right }) => {
  return (
    <div class={`mobile-switch ${styles.toggle}`}>
      <a class={`${state === 'left' && 'active'} ${styles.item}`} onClick={left.onClick}>
        {left.title}
      </a>
      <a class={`${state === 'right' && 'active'} ${styles.item}`} onClick={right.onClick}>
        {right.title}
      </a>
    </div>
  );
};
