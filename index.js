import CalendarComponent from "./modules/calendar_component.js";
import SideViewComponent from "./modules/sideview_component.js";

window.addEventListener('load', () => {
  (async () => {
    const get = (id) => {
      return document.getElementById(id);
    };

    // load holiday and quote data
    const holidaysData = await fetch('holidays.json').then(response => response.json());
    const quotesData = await fetch('dailyquotes.json').then(response => response.json());

    // initialize side view component
    const sideview = new SideViewComponent(get('holidays'),get('quotes'),get('cur_date'),holidaysData,quotesData);
    sideview.initialize();

    // initialize calendar component
    const onDatePicked = (date) => {
      sideview.switchDate(date);
    };
    const calendar = new CalendarComponent(get('cur_month'),get('calendar_days'),
      get('prev_month'),get('next_month'),onDatePicked);
    calendar.initialize();
  })();
});
