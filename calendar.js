const cycle = function (max) {
  let number = 0;
  return function () {
    if (number >= max) {
      number = 0;
    }
    return number++;
  }
}

const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
  'Thursday', 'Friday', 'Saturday'];

const dayMax = cycle(30);
const weekdayMax = cycle(6);
const monthMax = cycle(12);

const 

// console.log(MONTH.map());
