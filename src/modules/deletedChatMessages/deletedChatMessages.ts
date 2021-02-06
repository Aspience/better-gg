import { Module } from '@src/modules/types';

export const deletedChatMessages: Module<'deletedChatMessages'> = {
  name: 'deletedChatMessages',
  title: 'Показывать удалённые сообщения в чате',
  description: 'Перехват сокрытия сообщений, удаляемых должностными лицами.',
  onInit: onSuccess => {
    onSuccess?.();
  },
  onDestroy: onSuccess => {
    onSuccess?.();
  },
};
