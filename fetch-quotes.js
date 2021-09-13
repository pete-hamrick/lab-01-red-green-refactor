import fetch from 'node-fetch';

const fetchQuotes = async () => {
  const url = 'https://futuramaapi.herokuapp.com/api/quotes/1';
  const res = await fetch(url);
  const body = await res.json();

  return body[0];
};

export default fetchQuotes;
