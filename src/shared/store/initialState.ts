import { StoreState } from './types';

export const initialState: StoreState = {
  enabled: true,
  modules: {
    deletedChatMessages: {
      enabled: false,
    },
    smilesComplete: {
      enabled: false,
    },
  },
};
