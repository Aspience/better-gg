import { ModuleName } from '@src/modules/types';

export type StoreState = {
  enabled: boolean;
  modules: Record<ModuleName, ModuleSettings>;
};

export type ModuleSettings = {
  enabled: boolean;
};
