const Convert = (function () {
  function weightToMg(weight, units) {
    if (units === "grams") return weight * 1000;
    if (units === "kg") return weight * 1000 * 1000;
    return weight;
  }

  function Constructor(weight, options = {}) {
    let settings = Object.assign(
      {
        units: "mg",
      },
      options
    );

    if (!["mg", "grams", "kg"].includes(settings.units)) {
      throw `[Convert.js]: "${settings.units}" is not a valid weight`;
    }

    this.weight = weightToMg(weight, settings.units);
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

let hummingbird = new Convert(4, {
  units: "grams",
});

// Create an instance with the default milligrams
let bumbleBee = new Convert(150);

// Try to use an invalid unit
// throws an error: ""
let dragons = new Convert(5, {
  units: "dragonpounds",
});

// returns 4
let birdWeight = hummingbird.inGrams();

// returns 0.15
let beeWeight = bumbleBee.inGrams();

console.log(birdWeight, beeWeight);
