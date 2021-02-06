import { config } from '@src/app/config/config';
import { Module } from '@src/modules/types';

import styles from './style.scss';

const modifyNode = (node: HTMLDivElement): Node => {
  const date = new Date();
  node.classList.add(styles.messageBetterGgDeleted);
  node.title = `Удалено в ${date.getHours()}:${date.getMinutes()}`;
  return node;
};

const insertAfter = (parent: Node, referenceNode: Node | null, newNode: Node) => {
  if (referenceNode === null) {
    parent.appendChild(newNode);
  } else {
    referenceNode.parentNode?.insertBefore(newNode, referenceNode.nextSibling);
  }
};
const callback: MutationCallback = (mutationsList, observer) => {
  for (let mutation of mutationsList) {
    const { type, removedNodes, previousSibling, target } = mutation;
    if (type === 'childList' && removedNodes.length) {
      removedNodes.forEach(node => {
        insertAfter(target, previousSibling, modifyNode(node as HTMLDivElement));
      });
    }
  }
};
const observer = new MutationObserver(callback);

export const deletedChatMessages: Module<'deletedChatMessages'> = {
  name: 'deletedChatMessages',
  title: 'Показывать удалённые сообщения в чате',
  description: 'Перехват сокрытия сообщений, удаляемых должностными лицами.',
  onInit: onSuccess => {
    try {
      const chatElement = document.querySelector(config.chatSelector);
      if (chatElement) {
        observer.observe(chatElement, {
          childList: true,
        });
        onSuccess?.();
      }
    } catch (e) {}
  },
  onDestroy: onSuccess => {
    try {
      observer.disconnect();
      onSuccess?.();
    } catch (e) {}
  },
};
