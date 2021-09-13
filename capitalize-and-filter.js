const capitalizeAndFilter = (arr) => {
  const uppercaseStrings = arr.map((str) => str.toUpperCase());
  const filteredArray = uppercaseStrings.filter((string) => string[0] !== 'F');
  return filteredArray;
};
export default capitalizeAndFilter;
