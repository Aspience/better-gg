import { modules } from './index';

export type Module<Name extends string> = {
  name: Name;
  title: string;
  description?: string;
  onInit: (onSuccess?: () => void) => void;
  onDestroy: (onSuccess?: () => void) => void;
};

export type ModuleName = typeof modules[number]['name'];
