import { Modal } from '@src/components/modal';
import { initMenu } from '@src/helpers/initMenu';
import { renderModulesList } from '@src/helpers/renderModulesList';

interface IApp {
  init: () => void;
}

class App implements IApp {
  private modal: Modal;

  constructor() {
    this.modal = new Modal({
      id: 'better-gg',
      title: 'Better GG',
      content: renderModulesList(),
    });
  }

  init() {
    document.querySelector('body')?.appendChild(this.modal.render());
    initMenu({ onClick: () => this.modal.show() });
  }
}

export { App };
