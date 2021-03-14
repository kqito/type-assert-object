import { entries } from './entries';

describe('entries', () => {
  const users = {
    user1: { name: 'testName1', age: 20, data: {} },
    user2: { name: 'testName2', age: 20, data: {} },
    user3: { name: 'testName3', age: 20, data: {} },
    0: { name: 'testName4', age: 20, data: {} },
  } as const;
  type Users = typeof users;

  test('Should be same each value', () => {
    expect(entries(users)).toEqual(Object.entries(users));
  });

  test('Should be the type is mapped', () => {
    entries(users).forEach(([id, user]) => {
      expect<keyof Users>(id);
      expect<Users[keyof Users]>(user);
    });
  });
});
