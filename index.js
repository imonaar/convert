const weight = {
  defaultUnits: "pound",
  add: function (weight, amount) {
    return weight + amount;
  },

  subtract: function (weight, amount) {
    return weight - amount;
  },

  format: function (weight, units) {
    return weight.toLocaleString(undefined, {
      style: "unit",
      unit: units ? units : this.defaultUnits,
    });
  },
};

let current = 100;

console.log(weight.add(current, 6));
console.log(weight.format(current, "kilogram"));
console.log(weight.format(current));
