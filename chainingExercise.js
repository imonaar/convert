const Weight = (function () {
  function Constructor(weight) {
    this.weight = parseFloat(weight);
  }

  Constructor.prototype.inGrams = function () {
    this.weight = `${this.weight / 1000} grams`;
    return this;
  };
  Constructor.prototype.inKg = function () {
    this.weight = `${this.weight / (1000 * 1000)} Kgs`;
    return this;
  };
  Constructor.prototype.inMg = function () {
    this.weight = `${this.weight} Mgs`;
    return this;
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

console.log(afterEating.weight);
