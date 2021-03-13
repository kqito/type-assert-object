export type Entries<T> = T extends Record<string, any>
  ? {
      [P in keyof T]: [P, T[P]];
    }[keyof T][]
  : never;

export const entries = <T extends Record<string, any>>(values: T): Entries<T> =>
  Object.entries(values) as Entries<T>;
