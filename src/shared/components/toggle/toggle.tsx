import { FunctionalComponent } from 'vue';

import styles from './toggle.scss';

type ToggleState = 'left' | 'right';

type ToggleItem = {
  title: string;
  onClick: Function;
};

type Props = {
  state: ToggleState;
  left: ToggleItem;
  right: ToggleItem;
};

export const Toggle: FunctionalComponent<Props> = ({ left, right, state }) => {
  return (
    <div class={`mobile-switch ${styles.toggle}`}>
      <a class={`${state === 'left' && 'active'} ${styles.item}`} onClick={() => left.onClick()}>
        {left.title}
      </a>
      <a class={`${state === 'right' && 'active'} ${styles.item}`} onClick={() => right.onClick()}>
        {right.title}
      </a>
    </div>
  );
};
