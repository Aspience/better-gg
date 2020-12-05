import React from 'jsx-dom';

import { FC } from '@core/types';

import styles from './modal.scss';

type Props = {
  title: string;
  isOpened: boolean;
  show: () => void;
  hide: () => void;
};

export const Modal: FC<Props> = ({ title, isOpened, show, hide, children }) => {
  return (
    <div className={styles.modal} style={{ display: isOpened ? 'block' : 'none' }}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        {children}
      </div>
      <div
        className={styles.close}
        onClick={e => {
          e.preventDefault();
          hide();
        }}
      >
        <div className="icon icon-close3 close" />
      </div>
    </div>
  );
};
