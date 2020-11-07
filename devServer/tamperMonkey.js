// ==UserScript==
// @name         BetterGG DEV
// @namespace    http://tampermonkey.net/
// @match        https://goodgame.ru/*
// @run-at       document-end
// ==/UserScript==
const script = document.createElement('script');
script.src = 'https://localhost:3030/better-gg-bundle.js';
document.head.appendChild(script);
