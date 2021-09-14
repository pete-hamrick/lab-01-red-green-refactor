import fetchQuotes from './fetch-quotes';

describe('fetchQuotes', () => {
  it('should return an object with name, text and image key value pairs', async () => {
    const res = await fetchQuotes();
    expect(res).toEqual({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String),
    });
  });
});
