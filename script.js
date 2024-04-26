// ****************
// * Date Utility *
// ****************

// Returns true if year and month is valid
function isValidYearMonth(year, month) {
  return Number.isInteger(year) && Number.isInteger(month) && month >= 0 && month < 12;
}

// Returns the weekday of first day of specified month 
// Return value is in integer (i.e. 0 is Monday and so on)
function weekdayOfFirstDay(year, month) {
  // validate the input
    throw new Error('Invalid year or month specified');
  return new Date(year, month, 1).getDay();
}

// Convert month index to month name as string
function monthIndexToString(month) {
  // validate the input
  if (!Number.isInteger(month) || month < 0 || month >= 12)
    throw new Error('Invalid month specified');
  const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  return monthNames[month] 
}

// Returns true if year is leap year
function isLeapYear(year) {
  if (Number.isInteger(year))
    throw new Error('Invalid year specified');
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
  
// Returns the number of days of specified month
function getDaysOfMonth(year, month) {
  const daysInMonths = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ];
    if (isLeapYear(year) && month == 1) {
        return 29;
    }
    return daysInMonths[month];
}


const curMonthEle = document.querySelector('#cur_month');
curMonthEle.textContent = monthNames[month] + ", " + year

/*Init day arrays */
let days = new Array(35).fill(0);
let dates = new Array(35).fill(null);
let gray = new Array(35).fill(0);

/*Gather week info from functions */
let tuples = firstDaysOfMonth(year)
let firstDay = tuples[month].dayOfWeek



const currentDate = new Date();
var month = currentDate.getMonth();
let year = currentDate.getFullYear();
let selectedDay = null;

window.addEventListener('load', () => {
    resetMonth(month);
});

function prevMonth() {
    month--;
    if(month == -1){
        year--;
        month = 11
    }
    selectedDay = null
    resetMonth((month%12+12)%12);

}

function nextMonth() {
    month++;
    if(month == 12){
        year++
        month = 0
    }
    selectedDay = null
    resetMonth((month%12+12)%12);
}

function resetMonth() {
    const container = document.querySelector('#calendar_days');
const create_row = (days, gray, sel, today) => {
  const ele = document.createElement('div');
  ele.classList.add('calendar_row');
  days.forEach((txt, i) => {
    const day = document.createElement('div');
    if (!gray[i] && parseInt(txt)-1 == today) {
      day.classList.add('calendar_today');
    }
    if (!gray[i] && parseInt(txt)-1 == selectedDay) {
        day.classList.add('calendar_selected');
    }
    if (gray[i]) {
      day.classList.add('calendar_grayed');
    } else {
      day.addEventListener('click', () => {
        selectedDay = parseInt(txt)-1
        resetMonth();
      });
    }
    day.textContent = txt;
    ele.appendChild(day);
  });
  return ele;
};

/* Grab proper date information*/
/* Update current month*/

let counter = 1
let cc = 0
for(let i=firstDay; i<days.length; i++) {
    days[i] = counter++
    if (cc)
        gray[i] = 1
    if(counter > getDaysOfMonth(year,month)){
        counter = 1
        cc = 1
    }
}
let today = (year == currentDate.getFullYear() && month == currentDate.getMonth()) ? currentDate.getDate() - 1 : null;
let count = getDaysOfMonth(year, (month-1+12)%12);
for(let i=firstDay-1; i>=0; i--){
    days[i] = count--
    gray[i] = 1
}
container.innerHTML = ''

for (let i = 0; i < days.length; i += 7) {
  container.appendChild(create_row(days.slice(i,i+7).map(x=>x.toString()), gray.slice(i,i+7), selectedDay, today));
}
}
