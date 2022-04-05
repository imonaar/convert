const weight = (function () {
  let defaultUnits = "pound";
  function add(weight, amount) {
    return weight + amount;
  }

  function subtract(weight, amount) {
    return weight - amount;
  }

  function format(weight, units) {
    return weight.toLocaleString(undefined, {
      style: "unit",
      unit: units ? units : defaultUnits,
    });
  }

  return { add, subtract, format };
})();

let formatted = weight.format(100);

console.log(formatted);
