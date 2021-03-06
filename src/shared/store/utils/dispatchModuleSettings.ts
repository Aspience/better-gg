import { ModuleName } from '@src/modules/types';
import { config } from '@src/app/config/config';

import { ModuleSettings } from '../types';
import { getLocalStorageState } from './getLocalStorageState';

/**
 * Dispatch settings for a module in localStorage
 * @param name ModuleName
 * @param settings ModuleSettings
 */
export const dispatchModuleSettings = (name: ModuleName, settings: Partial<ModuleSettings>) => {
  const storage = getLocalStorageState();

  storage.modules[name] = {
    ...storage.modules[name],
    ...settings,
  };

  localStorage.setItem(config.localStorageKey, JSON.stringify(storage));
};
