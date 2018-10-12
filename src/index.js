import { format, getYear, getDaysInYear, getDayOfYear } from "date-fns";

const daysInCurrentYear = date => getDaysInYear(date);

const currentDayInCurrentYear = date => getDayOfYear(date);

const calculateYearPercentage = (yearDay, daysInYear) => {
  return parseInt((yearDay * 100) / daysInYear, 0);
};

export const fn = ({ term, display }) => {
  if (term.match(/^year\s?$/i)) {
    let currentDate = new Date();
    let currentYear = getYear(currentDate);
    let yearDay = currentDayInCurrentYear(currentDate);
    let yearDays = daysInCurrentYear(currentDate);
    let yearPercentage = calculateYearPercentage(yearDay, yearDays);

    display({
      title: `Year progress`,
      getPreview: () => `<div style="text-align: center;">
        <p style="font-size: 2em;">
          We are at the <br>
          <span style="font-size: 2.5em;">${yearPercentage}%</span>
          <br>of ${currentYear}
        </p>
        <p>Today is ${format(
          currentDate,
          "D MMM YYYY"
        )} day ${yearDay} of ${yearDays}</p>
      </div>`
    });
  }
};
