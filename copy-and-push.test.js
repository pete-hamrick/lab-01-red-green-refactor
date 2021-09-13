import copyAndPush from './copy-and-push';

describe('copyAndPush', () => {
  const numbers = [1, 2, 3];
  it('should return a new array of 1, 2, 3, 4', () => {
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
  });
  it('test to make sure numbers is unchanged', () => {
    expect(numbers).toEqual([1, 2, 3]);
  });
});
