type MyReadonly2<T extends object, U extends keyof T = keyof T> = {
  readonly [key in U]: T[key];
} & {
  [key in Exclude<keyof T, U>]: T[key];
};
