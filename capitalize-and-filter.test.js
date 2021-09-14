import capitalizeAndFilter from './capitalize-and-filter';

describe('capitalizeAndFilter', () => {
  const arr = ['Bob', 'frank', 'Jeff', 'Fred'];
  it('should return arr with no f words', () => {
    expect(capitalizeAndFilter(arr)).toEqual(['BOB', 'JEFF']);
  });
});
