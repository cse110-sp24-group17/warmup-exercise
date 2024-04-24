
window.addEventListener('load', () => {
const container = document.querySelector('#calendar_days');
const create_row = (days, gray, sel) => {
  const ele = document.createElement('div');
  ele.classList.add('calendar_row');
  days.forEach((txt, i) => {
    const day = document.createElement('div');
    if (gray[i]) {
      day.classList.add('calendar_selected');
    }
    day.textContent = txt;
    ele.appendChild(day);
  });
  return ele;
};

/* Grab proper date information*/
const currentDate = new Date();
let month =currentDate.getMonth();
let year = currentDate.getFullYear();

let monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
const curMonthEle = document.querySelector('#cur_month');
curMonthEle.textContent = monthNames[month] + ", " + year

/*Init day arrays */
let days = new Array(35).fill(0);
let gray = new Array(35).fill(0);

/*Gather week info from functions */
let tuples = firstDaysOfMonth(year)
let firstDay = tuples[month].dayOfWeek

/* Update current month*/
let counter = 1
let cc = 0
for(let i=firstDay; i<days.length; i++) {
    days[i] = counter++
    if (cc)
        gray[i] = 1
    if(counter > 30){
        counter = 1
        cc = 1
    }
}
let count = 31
for(let i=firstDay-1; i>=0; i--){
    days[i] = count--
    gray[i] = 1
}

for (let i = 0; i < days.length; i += 7) {
  container.appendChild(create_row(days.slice(i,i+7).map(x=>x.toString()), gray.slice(i,i+7), '23'));
}
});


/*Fucntion to gather week infor from year*/ 
function firstDaysOfMonth(year) {
    const firstDays = [];
  
    for (let month = 0; month < 12; month++) {
      const firstDayOfMonth = new Date(year, month, 1);
      const dayOfWeek = firstDayOfMonth.getDay();
      firstDays.push({ date: firstDayOfMonth, dayOfWeek: dayOfWeek });
    }
  
    return firstDays;
  }
  
  // Example usage:
  const year = 2024;
  const firstDays = firstDaysOfMonth(year);
  console.log(firstDays);
  
