import React from 'jsx-dom';

import { GComponent } from '@src/core/GComponent';
import { state } from '@src/core/decorators/state';

import styles from './modal.scss';

interface IModal {
  close: () => void;
  show: () => void;
  getElement: () => HTMLDivElement;
}

class Modal extends GComponent implements IModal {
  @state public isShown: boolean = false;

  private readonly id: string;
  private readonly title: string;
  private readonly content?: JSX.Element;

  constructor({ id, title, content }: { id: string; title: string; content?: JSX.Element }) {
    super();
    this.id = id;
    this.title = title;
    this.content = content;

    /*
    let prop = Reflect.get(this, 'isShown');

    Object.defineProperty(this, 'isShown', {
      set: value => {
        console.log('set');
        prop = value;
        this.render();
      },
      get(): any {
        return prop;
      },
    });
     */
  }

  getElement() {
    return document.getElementById(this.id) as HTMLDivElement;
  }

  show() {
    console.log('before show');
    console.log(this.isShown);
    this.isShown = true;
    console.log('after show');
    console.log(this.isShown);
  }

  close() {
    this.isShown = false;
  }

  render() {
    console.log('render');
    return (
      <div
        id={this.id}
        className={styles.modal}
        style={{ display: this.isShown ? 'block' : 'none' }}
      >
        <div className={styles.content}>
          <div className={styles.title}>{this.title}</div>
          {this.content}
        </div>
        <div
          className={styles.close}
          onClick={e => {
            e.preventDefault();
            this.close();
          }}
        >
          <div className="icon icon-close3 close" />
        </div>
      </div>
    );
  }
}
export { Modal };
