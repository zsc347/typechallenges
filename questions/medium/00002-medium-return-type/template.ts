type MyReturnType<T extends (...args: unknown[]) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
