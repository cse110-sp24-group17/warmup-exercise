import { isSameDay } from "./date_util.js"
// Convert date to MM.DD
function convertDateToString(date) {
  return `${(date.getMonth() + 1)}.${date.getDate()}`;
}

// SideViewComponent displays the detail of each day
export default class SideViewComponent {
  constructor(holidaysElement, quoteElement, curDateElement, holidaysData, quotesData) {
    this.holidaysElement = holidaysElement;
    this.quoteElement = quoteElement;
    this.curDateElement = curDateElement;
    this.holidaysData = holidaysData;
    this.quotesData = quotesData;
  }

  // initailzie the component and performs initial render
  initialize() {
    this.selectedDate = new Date();
    this.render();
  }

  // switch the selected date and re render
  switchDate(date) {
    this.selectedDate = date;
    this.render();
  }

  // renders the component
  render() {
    this.displayHoliday(convertDateToString(this.selectedDate));
    this.displayQuote(convertDateToString(this.selectedDate));
    const dateString = this.selectedDate.toLocaleDateString('en-US');
    if (isSameDay(this.selectedDate, new Date())) {
      this.curDateElement.textContent = "Today, " + dateString;
    } else {
      this.curDateElement.textContent = dateString;
    }
  }

  // diplay holidays of current selected date
  displayHoliday(inputDate) {
    // Clear existing holiday list
    this.holidaysElement.innerHTML = '';
  
    // Get holiday names for the input date
    const matchedHolidays = this.holidaysData[inputDate] || [];
  
    // Display matched holidays
    matchedHolidays.forEach(holiday => {
      const li = document.createElement('div');
      li.className = 'holiday'
      const title = document.createElement('div');
      title.className = 'holiday_title';
      title.innerHTML = holiday + ' <span class="holiday_place">@ UCSD</span>';
      li.appendChild(title);
      const time = document.createElement('div');
      time.className = 'holiday_time';
      time.textContent = 'whole day';
      li.append(time);
      this.holidaysElement.appendChild(li);
    });
  }

  // diplay quotes of current selected date
  displayQuote(inputDate) {
    const quoteContainer = document.querySelector('.quote');
  
    // Clear existing quote
    quoteContainer.innerHTML = '';
  
    // Get quote for the input date
    const quote = this.quotesData[inputDate];
  
    // Display quote
    if (quote) {
      const quoteText = document.createElement('div');
      quoteText.textContent = quote;
      quoteContainer.appendChild(quoteText);
    } else {
      const defaultText = document.createElement('div');
      defaultText.textContent = "No quote available for this date.";
      quoteContainer.appendChild(defaultText);
    }
  }
};
