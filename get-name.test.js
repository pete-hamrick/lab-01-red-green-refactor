import getName from './get-name';

describe('getName', () => {
  it('returns the name spot from the given object spot', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    
    expect(getName(spot)).toEqual('spot');
  });
});
