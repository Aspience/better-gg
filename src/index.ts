import { initMenu } from '@src/services/initMenu';

const onClickHandler = () => {};

// TODO: find an approach to detect of event when goodgame.ru is loaded (instance of angular)
const initApp = () =>
  setTimeout(() => {
    initMenu({ onClick: onClickHandler });
  }, 7000);

document.addEventListener('DOMContentLoaded', initApp);
