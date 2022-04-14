const time = (function () {
  function getDay(date) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  }

  function getMonth(month) {
    const months = [
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
    ];
    return months[date.getMonth()];
  }

  function addSeconds(date, n) {
    return date.setSeconds(date.getSeconds() + n);
  }
  function addHours(date, n) {
    return date.setHours(date.getHours() + n);
  }
  function addMinutes(date, n) {
    return date.setMinutes(date.getMinutes() + n);
  }

  function addDays(date, n) {
    return date.setDate(date.getDate() + n);
  }

  function addMonths(date, n) {
    return date.setMonth(date.getMonth() + n);
  }

  function addYears(date, n) {
    date.setFullYear(date.getFullYear() + n);
  }

  return {
    getDay,
    getMonth,
    addSeconds,
    addMinutes,
    addHours,
    addDays,
    addMonths,
    addYears,
  };
})();

// Create a Date() object for halloween

// Create a Date() object for halloween
let halloween = new Date("October 31, 2021");

// Get the day of the week
let day = time.getDay(halloween);
console.log(day);

// Add 4 months to the date
time.addDays(halloween, 4);
console.log(halloween);
