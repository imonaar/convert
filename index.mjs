import * as time from './date-library-modules.mjs'

// Create a Date() object for halloween

// Create a Date() object for halloween
let halloween = new Date("October 31, 2021");

// Get the day of the week
let day = time.getDay(halloween);
console.log(day);

// Add 4 months to the date
time.addDays(halloween, 4);
console.log(halloween);
