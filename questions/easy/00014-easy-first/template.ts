type First<T extends unknown[]> = T extends [infer First, ...infer _Rest]
  ? First
  : never;

type Test1 = First<[() => 123, { a: string }]>;
