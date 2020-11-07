import React from 'jsx-dom';

import config from '@src/config';

type InitMenu = {
  (params: { onClick: () => void }): void;
};

const initMenu: InitMenu = ({ onClick }) => {
  const menuList = document.querySelector(config.menuSelector);

  console.log('menuList', menuList);
  if (menuList) {
    menuList.appendChild(
      <li onClick={onClick}>
        <a href="#">BetterGG</a>
      </li>,
    );
  }
};

export { initMenu };
