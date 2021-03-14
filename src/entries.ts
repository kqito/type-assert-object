export type Entries<T> = T extends Record<PropertyKey, any>
  ? {
      [P in keyof T]: [P, T[P]];
    }[keyof T][]
  : never;

export const entries = <T extends Record<PropertyKey, any>>(
  values: T
): Entries<T> => Object.entries(values) as Entries<T>;
