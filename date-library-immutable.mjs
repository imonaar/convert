//copied time is the only way i could hack around not mutatting the this.date reference

function Constructor(date = [], options = {}) {
  let settings = Object.assign(
    {
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],

      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    options
  );

  Object.freeze(settings);

  if (!Array.isArray(date)) {
    date = [date];
  }

  Object.defineProperties(this, {
    date: { value: new Date(...date) },
    _settings: { value: settings },
  });
}

Constructor.prototype.getDay = function () {
  return this._settings.days[this.date.getDay()];
};

Constructor.prototype.getMonth = function () {
  return this._settings.months[this.date.getMonth()];
};

Constructor.prototype.addSeconds = function (n) {
  let copiedTime = new Date(this.date.getTime());
  let newTime = copiedTime.setSeconds(this.date.getSeconds() + n);
  return new Constructor(newTime, this._settings);
};

Constructor.prototype.addMinutes = function (n) {
  let copiedTime = new Date(this.date.getTime());
  let newTime = copiedTime.setMinutes(this.date.getMinutes() + n);
  return new Constructor(newTime, this._settings);
};

Constructor.prototype.addHours = function (n) {
  let copiedTime = new Date(this.date.getTime());
  let newTime = copiedTime.setHours(this.date.getHours() + n);
  return new Constructor(newTime, this._settings);
};

Constructor.prototype.addDays = function (n) {
  let copiedTime = new Date(this.date.getTime());
  let newTime = copiedTime.setDate(this.date.getDate() + n);
  return new Constructor(newTime, this._settings);
};

Constructor.prototype.addMonths = function (n) {
  let copiedTime = new Date(this.date.getTime());
  let newTime = copiedTime.setMonth(this.date.getMonth() + n);
  return new Constructor(newTime, this._settings);
};

Constructor.prototype.addYears = function (n) {
  let copiedTime = new Date(this.date.getTime());
  let newTime = copiedTime.setFullYear(this.date.getFullYear() + n);
  return new Constructor(newTime, this._settings);
};

export default Constructor;

// Create a new Time() instance
// Customize the days and months
