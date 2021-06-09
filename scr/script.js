import "./../styles/styles.scss";
import { initMinDate, changeCalendarValue } from "./date.js";
import { fillCountries } from "./workWithApi.js";
import { onFormSubmit } from "./validateForm.js";
import { backToMainWithParameters, clearForm, deleteHistoryItem, initCitiesSelector } from "./functions.js";
import { checkCurrentPage } from "./view.js";

document.addEventListener("click", checkCurrentPage);
document.addEventListener("click", backToMainWithParameters);
document.addEventListener("click", clearForm);
document.addEventListener("click", deleteHistoryItem);
document.addEventListener("change", changeCalendarValue);
document.addEventListener("submit", onFormSubmit);
document.addEventListener("change", initCitiesSelector);

export function initPage() {
  initMinDate();
  const countryField = document.querySelectorAll(".country-picker");
  fillCountries(countryField);
}

initPage();
