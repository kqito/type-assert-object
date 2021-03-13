import { entries } from './entries';

describe('entries', () => {
  type Users = typeof users;
  const users = {
    user1: { name: 'testName1', age: 10 },
    user2: { name: 'testName2', age: 12 },
    user3: { name: 'testName3', age: 13 },
    user4: { name: 'testName4', age: 18 },
    user5: { name: 'testName5', age: 20 },
  } as const;

  test('Should be same each value', () => {
    expect(entries(users)).toEqual(Object.entries(users));
  });

  test('Should be the type is mapped', () => {
    const setUserId = (userId: keyof Users) => {
      expect(userId).toBeTruthy();
    };
    const setUserInfo = (userInfo: Users[keyof Users]) => {
      expect(userInfo).toBeTruthy();
    };

    entries(users).forEach(([id, user]) => {
      setUserId(id);
      setUserInfo(user);
    });
  });
});
