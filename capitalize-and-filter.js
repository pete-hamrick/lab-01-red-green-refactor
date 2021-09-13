// const capitalizeAndFilter = (arr) => {
//   const uppercaseStrings = arr.map((str) => str.toUpperCase());
//   const filteredArray = uppercaseStrings.filter((string) => string[0] !== 'F');
//   return filteredArray;
// };
// export default capitalizeAndFilter;

const capitalizeAndFilter = (arr) => {
  const filteredStrings = [];
  let string;
  for (const str of arr) {
    string = str.toUpperCase();
    if (string[0] !== 'F') {
      filteredStrings.push(string);
    }
  }
  return filteredStrings;
};
export default capitalizeAndFilter;
