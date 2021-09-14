import fetch from 'node-fetch';

const fetchQuotes = async () => {
  const url = 'https://futuramaapi.herokuapp.com/api/quotes/1';
  const res = await fetch(url);
  const body = await res.json();

  return {
    name: body[0].character,
    text: body[0].quote,
    image: body[0].image,
  };
};

export default fetchQuotes;
