export type Keys<T> = T extends Record<PropertyKey, any> ? keyof T : never;

export const keys = <T>(values: T): Keys<T> =>
  (Object.keys(values) as unknown) as Keys<T>;
