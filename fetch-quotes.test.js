import fetchQuotes from './fetch-quotes';

describe('fetchQuotes', () => {
  it('should return an object with name, text and image key value pairs', async () => {
    const res = await fetchQuotes();
    expect(res).toEqual({
      character: expect.any(String),
      quote: expect.any(String),
      image: expect.any(String),
    });
  });
});
