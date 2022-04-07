const Weight = (function () {
  function Constructor(weight) {
    this.weight = parseFloat(weight);
  }

  Constructor.prototype.inGrams = function () {
    return `${this.weight / 1000} grams`;
  };
  Constructor.prototype.inKg = function () {
    return `${this.weight / (1000 * 1000)} Kgs`;
  };
  Constructor.prototype.inMg = function () {
    return `${this.weight} Mgs`;
  };

  return Constructor;
})();

let hummingbird = new Weight(4000);

let grams = hummingbird.inGrams();

// returns 0.004
let kg = hummingbird.inKg();

// returns 4000
let mg = hummingbird.inMg();

console.log(grams, kg, mg);
