type SetState<T> = (newState: T) => void;

export function useState<S>(initialState: S): [S, SetState<S>];
export function useState<S>(initialState) {
  let state: { payload: S } = {
    payload: initialState,
  };
  state = new Proxy(state, {
    get(target, prop) {
      return target[prop];
    },
    set(target, prop, val) {
      target[prop] = val;
      return true;
    },
  });

  const setState: SetState<S> = newState => {
    state.payload = newState;
  };

  return [state.payload, setState];
}
