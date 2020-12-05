import React from 'jsx-dom';

import { App } from '@src/app';

const root = document.createElement('div');
root.id = 'better-gg';
root.appendChild(<App />);

document.body.appendChild(root);
