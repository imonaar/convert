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

export {
  getDay,
  getMonth,
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addMonths,
  addYears,
};

