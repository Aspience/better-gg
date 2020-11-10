export type Module = {
  name: string;
  title: string;
  description?: string;
  onInit: () => void;
  onDestroy: () => void;
};
