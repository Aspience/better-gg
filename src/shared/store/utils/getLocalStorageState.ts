import { StoreState } from '../types';
import { initialState } from '../initialState';
import { config } from '@src/app/config/config';

export const getLocalStorageState = (): StoreState => {
  try {
    return JSON.parse(localStorage.getItem(config.localStorageKey) || '');
  } catch (e) {
    localStorage.setItem(config.localStorageKey, JSON.stringify(initialState));
    return initialState;
  }
};
