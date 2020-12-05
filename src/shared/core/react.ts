export const react = <T extends object>(data: T): T => {
  const proxy = new Proxy(data, {
    get(target, prop, receiver) {
      return target[prop];
    },
    set(target, prop, val, receiver) {
      target[prop] = val;
      return true;
    },
  });

  return proxy;
};
