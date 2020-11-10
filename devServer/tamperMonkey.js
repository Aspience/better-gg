// ==UserScript==
// @name         BetterGG DEV
// @namespace    http://tampermonkey.net/
// @match        https://goodgame.ru/*
// @run-at       document-end
// ==/UserScript==

const host = 'https://localhost:3030';

const script = document.createElement('script');
script.src = `${host}/better-gg-bundle.js`;
const link = document.createElement('link');
link.href = `${host}/assets/styles.css`
link.rel = 'stylesheet';
document.head.appendChild(script);
document.head.appendChild(link);
