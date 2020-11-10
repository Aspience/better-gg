import React from 'jsx-dom';

import styles from './styles.scss';

interface IModal {
  render: any;
}

class Modal implements IModal {
  private id: string;

  constructor(id: string) {
    this.id = id;
  }

  render() {
    return <div id={this.id} className={styles.modal}></div>;
  }
}
export { Modal };
