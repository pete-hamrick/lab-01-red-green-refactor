import getName from './get-name';

describe('getName', () => {
  it('returns the name spot from the given object spot', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };

    expect(getName(spot)).toEqual('spot');
  });
  it('returns the name Aang from the given object character', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };

    expect(getName(character)).toEqual('Aang');
  });
});
