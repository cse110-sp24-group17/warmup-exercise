import CalendarComponent from "./modules/calendar_component.js";
import SideViewComponent from "./modules/sideview_component.js";

window.addEventListener('load', () => {
  (async () => {
    const get = (id) => {
      return document.getElementById(id);
    };
    const holidaysData = await fetch('Holidays.json').then(response => response.json());
    const quotesData = await fetch('dailyquotes.json').then(response => response.json());
    const sideview = new SideViewComponent(get('holidays'),get('quotes'),holidaysData,quotesData);
    sideview.initialize();
    const onDatePicked = (date) => {
      sideview.switchDate(date);
    };
    const calendar = new CalendarComponent(get('cur_month'),get('calendar_days'),
      get('prev_month'),get('next_month'),onDatePicked);
    calendar.initialize();
  })();
});

/*
function displayHolidayAndQuote(clickDate, holidaysData, quotesData) {
    displayHoliday(clickDate, holidaysData);
    displayQuote(clickDate, quotesData);
  }
  
  function displayHoliday(inputDate, holidaysData) {
    const holidaysList = document.querySelector('.holidays ul');
  
    // Clear existing holiday list
    holidaysList.innerHTML = '';
  
    // Get holiday names for the input date
    const matchedHolidays = holidaysData[inputDate] || [];
  
    // Display matched holidays
    matchedHolidays.forEach(holiday => {
      const li = document.createElement('li');
      li.textContent = holiday;
      holidaysList.appendChild(li);
    });
  }
  
  function displayQuote(inputDate, quotesData) {
    const quoteContainer = document.querySelector('.quote');
  
    // Clear existing quote
    quoteContainer.innerHTML = '';
  
    // Get quote for the input date
    const quote = quotesData[inputDate];
  
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
  
  window.addEventListener('load', () => {
    // Fetch holiday data from JSON file
    fetch('Holidays.json')
      .then(response => response.json())
      .then(holidaysData => {
        // Fetch quotes data from JSON file
        fetch('dailyquotes.json')
          .then(response => response.json())
          .then(quotesData => {
            const clickDate = '4.15'; // Example click date
            displayHolidayAndQuote(clickDate, holidaysData, quotesData);
          })
          .catch(error => {
            console.error('Error fetching quotes:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching holidays:', error);
      });
  });
  
*/
