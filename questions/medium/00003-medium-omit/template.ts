type MyOmit<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? never : T[P];
};
