let currentFirstDate = document.getElementById("firstDate");
let currentSecondDate = document.getElementById("secondDate");

export function initMinDate() {
  currentFirstDate = document.getElementById("firstDate");
  currentSecondDate = document.getElementById("secondDate");
  currentFirstDate.setAttribute("min", getCurrentDate());
  currentSecondDate.setAttribute("min", getCurrentDate());
}

function getCurrentDate() {
  let today = new Date();
  let dayIsToday = today.getDate();
  let monthIsToday = today.getMonth() + 1;
  const yearIsToday = today.getFullYear();
  if (dayIsToday < 10) {
    dayIsToday = "0" + dayIsToday;
  }
  if (monthIsToday < 10) {
    monthIsToday = "0" + monthIsToday;
  }
  return yearIsToday + "-" + monthIsToday + "-" + dayIsToday;
}

export function changeCalendarValue(e) {
  if (e.target === currentFirstDate) {
    const currentDate = currentFirstDate.value;

    if (new Date(currentSecondDate.value) < new Date(currentFirstDate.value)) {
      currentSecondDate.value = currentDate;
    }
    currentSecondDate.setAttribute("min", currentDate);
  }
}
