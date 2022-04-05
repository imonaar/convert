const convert = (function () {
  function convertToLocaleString(result) {
    return result.toLocaleString();
    //only used for multiplication calculation to add commas. 
  }
  function gramsToMg(weight) {
    return `${convertToLocaleString(weight * 1000)} mgs`;
  }
  function gramsToKg(weight) {
    return `${weight / 1000} kgs`;
  }
  function kilogramsToG(weight) {
    return `${convertToLocaleString(weight * 1000)} grams`;
  }
  function kilogramsToMg(weight) {
    return `${convertToLocaleString(weight * 1000 * 1000)} mgs`;
  }
  function milligramsToG(weight) {
    return `${weight / 1000} grams`;
  }
  function milligramsToKg(weight) {
    return `${weight / (1000 * 1000)} kgs`;
  }

  return {
    gramsToKg,
    gramsToMg,
    kilogramsToG,
    kilogramsToMg,
    milligramsToG,
    milligramsToKg,
  };
})();

const {
  gramsToKg,
  gramsToMg,
  kilogramsToG,
  kilogramsToMg,
  milligramsToG,
  milligramsToKg,
} = convert;

console.log(
  gramsToKg(100),
  gramsToMg(100),
  kilogramsToG(100),
  kilogramsToMg(100),
  milligramsToG(0.1),
  milligramsToKg(100)
);
