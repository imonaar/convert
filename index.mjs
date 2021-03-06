import Time from './date-library-immutable.mjs'

let halloween = new Time("October 31, 2021", {
  days: [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ],
  months: [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ],
});

// Try to override settings
// These should not change anything
// halloween._settings = null;
// halloween._settings.months = null;

// Get details from the instance
// returns "domingo" and "octubre"
let day = halloween.getDay();
let month = halloween.getMonth();

console.log(day, month);

// Add some time
let allHallowsDay = halloween.addYears(5).addDays(1);

// halloween should still be October 31, 2021
// allHallowsDay should be November 1, 2026
console.log(halloween.date);
console.log(allHallowsDay.date);
