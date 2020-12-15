import { config } from '../config/config';

type InitMenu = {
  (params: { onClick: () => void }): void;
};

const initMenu: InitMenu = ({ onClick }) => {
  const menuList = document.querySelector(config.menuSelector);

  if (menuList) {
    const linkElement = document.createElement('a');
    linkElement.addEventListener('click', onClick);
    linkElement.innerText = 'BetterGG';
    linkElement.href = '#';

    const menuElement = document.createElement('li');
    menuElement.appendChild(linkElement);

    menuList.appendChild(menuElement);
  }
};

export { initMenu };
