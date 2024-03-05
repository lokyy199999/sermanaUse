const sermana = require('sermana');

// Get the current week number
const currentWeek = sermana.getCurrentWeekNumber();
console.log('Current week number:', currentWeek);

// Get the start date of the current week
const startDate = sermana.getStartOfWeek();
console.log('Start date of current week:', startDate.toDateString());

// Get the end date of the current week
const endDate = sermana.getEndOfWeek();
console.log('End date of current week:', endDate.toDateString());
