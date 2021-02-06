import { Module } from '../types';

export const smilesCompleteModule: Module<'smilesComplete'> = {
  name: 'smilesComplete',
  title: 'Автодополнение смайлов в чате',
  description:
    'Начните вводить ":", затем название смайла, для отображения списка смайлов, подходящих под введённое название.',
  onInit: onSuccess => {
    onSuccess?.();
  },
  onDestroy: onSuccess => {
    onSuccess?.();
  },
};
