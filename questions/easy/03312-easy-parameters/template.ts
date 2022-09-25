type MyParameters<T extends (...args: any[]) => unknown> = T extends (
  ...args: infer A
) => infer _R
  ? A
  : never;
