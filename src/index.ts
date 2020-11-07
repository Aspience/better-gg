import { initMenu } from '@src/services/initMenu';

const onClickHandler = () => {};

const initApp = () => {
  initMenu({ onClick: onClickHandler });
};

initApp();
