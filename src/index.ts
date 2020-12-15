import { createApp } from 'vue';

import { App } from '@src/app';

const root = document.createElement('div');
root.id = 'better-gg';
document.body.appendChild(root);

const app = createApp(App);
app.mount(root);
