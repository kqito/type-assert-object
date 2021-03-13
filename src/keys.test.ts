import { keys } from './keys';

describe('entries', () => {
  type Users = typeof users;
  const users = {
    user1: { name: 'testName1', age: 20, data: {} },
    user2: { name: 'testName2', age: 20, data: {} },
    user3: { name: 'testName3', age: 20, data: {} },
    0: { name: 'testName4', age: 20, data: {} },
  } as const;

  test('Should be same each value', () => {
    expect(keys(users)).toEqual(Object.keys(users));
  });

  test('Should be the type is mapped', () => {
    const usersKey = keys(users);
    expect<keyof Users>(usersKey);
  });
});
