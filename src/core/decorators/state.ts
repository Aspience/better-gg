import { GComponent } from '@src/core/GComponent';

export const state = <T>(target: GComponent, key: string) => {
  console.log('target', target);
  console.log('key', key);
  if (!(target instanceof GComponent)) {
    throw new Error('Decorator should be use only for fields of Component class');
  }
  console.log('target[key]', target[key]);
  let prop: T = Reflect.get(target, key);
  console.log('prop', prop);

  Object.defineProperty(target, key, {
    set: (value: T) => {
      console.log('set');
      prop = value;
    },
    get(): T {
      return prop;
    },
  });
};
