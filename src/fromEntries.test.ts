import { entries } from './entries';
import { fromEntries } from './fromEntries';

describe('fromEntries', () => {
  const users = {
    user1: { name: 'testName1', age: 20, data: {} },
    user2: { name: 'testName2', age: 20, data: {} },
    user3: { name: 'testName3', age: 20, data: {} },
    0: { name: 'testName4', age: 20, data: {} },
  } as const;
  type Users = typeof users;
  const usersArray = entries(users);

  test('Should be same each value', () => {
    expect(fromEntries(usersArray)).toEqual(Object.fromEntries(usersArray));
  });

  test('Should be the type is mapped', () => {
    const usersObj = fromEntries(usersArray);
    expect<Users>(usersObj).toEqual(users);
  });
});
