import { Module } from '@src/types/models';

export const smilesCompleteModule: Module = {
  name: 'smilesComplete',
  title: 'Автодополнение смайлов в чате',
  description:
    'Начните вводить ":", затем название смайла, для отображения списка смайлов, подходящих под введённое название.',
  onInit: () => {},
  onDestroy: () => {},
};
