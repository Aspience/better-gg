import React from 'jsx-dom';

import styles from './modal.scss';

interface IModal {
  render: () => JSX.Element;
  close: () => void;
  show: () => void;
  getElement: () => HTMLDivElement;
}

class Modal implements IModal {
  private readonly id: string;
  private readonly content?: JSX.Element;

  constructor(id: string, content?: JSX.Element) {
    this.id = id;
    this.content = content;
  }

  getElement() {
    return document.getElementById(this.id) as HTMLDivElement;
  }

  show() {
    this.getElement().style.display = 'block';
  }

  close() {
    this.getElement().style.display = 'none';
  }

  render() {
    return (
      <div id={this.id} className={styles.modal} style={{ display: 'none' }}>
        <div className={styles.content}>{this.content}</div>
        <div
          className={styles.close}
          onClick={e => {
            e.preventDefault();
            this.close();
          }}
        >
          <div class="icon icon-close3 close" />
        </div>
      </div>
    );
  }
}
export { Modal };
