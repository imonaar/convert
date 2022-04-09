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

  Constructor.prototype.addMg = function (amount) {
    this.weight = this.weight + amount;
    return this;
  };
  Constructor.prototype.addGrams = function (amount) {
    let amountInMg = amount * 1000;
    this.weight = this.weight + amountInMg;
    return this;
  };
  Constructor.prototype.addKg = function (amount) {
    let amountInMg = amount * 1000 * 1000;
    this.weight = this.weight + amountInMg;
    return this;
  };

  return Constructor;
})();

let hummingbird = new Weight(4000);

// Add some weight and get the new value in grams
let afterEating = hummingbird.addMg(150).addGrams(1).inGrams();

console.log(afterEating);
