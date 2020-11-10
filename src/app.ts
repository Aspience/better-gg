import { Modal } from '@src/components/modal/modal';
import { initMenu } from '@src/services/initMenu';
import config from '@src/config';

interface IApp {
  show: () => void;
  hide: () => void;
}

class App implements IApp {
  private modal;

  constructor() {
    this.modal = new Modal('better-gg');

    initMenu({ onClick: () => this.show() });
  }

  show() {}

  hide() {}

  init() {
    console.log(typeof this.modal.render());
    document.querySelector('body')?.appendChild(this.modal.render());
  }
}

export { App };
