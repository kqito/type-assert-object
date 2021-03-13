type CastToString<T> = T extends PropertyKey ? T : string;
export type FromEntries<T> = T extends [infer K, any][]
  ? { [P in CastToString<K>]: Extract<T[number], [P, any]>[1] }
  : { [key in string]: any };

export const fromEntries = <T extends Iterable<readonly [PropertyKey, any]>>(
  values: T
): FromEntries<T> => Object.fromEntries(values) as FromEntries<T>;
