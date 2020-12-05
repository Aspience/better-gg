type PropsWithChildren<T> = T & {
  children?: JSX.Element;
};

export type FC<T = any> = {
  (props: PropsWithChildren<T>): JSX.Element;
};
