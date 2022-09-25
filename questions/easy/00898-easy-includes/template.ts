import { Equal } from "@type-challenges/utils";

export type Includes<T extends unknown[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

type X1 = ["Kars", "Esidisi", "Wamuu", "Santana"];

type X2 = "Kars";

type X3 = Includes<X1, X2>;
