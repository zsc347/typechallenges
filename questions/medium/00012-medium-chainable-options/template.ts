// Failed solution
type ChainableFailed<O = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<O & { [P in K]: V }>;
  get(): O;
};

// Succeed Solution
type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? (V extends T[K] ? never : K) : K,
    value: V
  ): Chainable<
    { [P in keyof T as P extends K ? never : P]: T[P] } & { [P in K]: V }
  >;
  get(): T;
};
