import copyAndPush from './copy-and-push';

describe('copyAndPush', () => {
  it('should return a new array of 1, 2, 3, 4', () => {
    const numbers = [1, 2, 3];
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
  });
});
