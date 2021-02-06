import { FunctionalComponent } from 'vue';

import styles from './modal.scss';

type Props = {
  title: string;
  isOpened: boolean;
  show: Function;
  hide: Function;
};

export const Modal: FunctionalComponent<Props> = ({ isOpened, show, hide, title }, context) => {
  return (
    <div class={styles.modal} style={{ display: isOpened ? 'block' : 'none' }}>
      <div class={styles.content}>
        <div class={styles.title}>{title}</div>
        {context.slots.default?.()}
      </div>
      <div
        class={styles.close}
        onClick={e => {
          e.preventDefault();
          hide();
        }}
      >
        <div class="icon icon-close3 close" />
      </div>
    </div>
  );
};
