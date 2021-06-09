import "./../styles/styles.scss";
import { initMinDate, changeCalendarValue } from "./date.js";
import { getInputs } from "./inputs";
import { fillCities, fillCountries } from "./workWithApi.js";
import { VALIDATOR } from "./validator.js";
import { onFormSubmit } from "./validateForm.js";
import { backToMainWithParameters, clearForm, deleteHistoryItem } from "./functions.js";
import { renderMainPage, renderPageComponent } from "./renderPage.js";

initPage();

document.addEventListener("click", checkCurrentPage);
document.addEventListener("click", backToMainWithParameters);
document.addEventListener("click", clearForm);
document.addEventListener("click", deleteHistoryItem);
document.addEventListener("change", changeCalendarValue);
document.addEventListener("submit", onFormSubmit);
document.addEventListener("change", action);

function action(e) {
  if (e.target.classList.contains("country")) {
    const value = e.target.value;
    const container = e.target.closest(".location-form-container");
    const citypicker = container.querySelectorAll(".city-picker");
    fillCities(value, citypicker);
  }
}

function checkCurrentPage(e) {
  if (e.target.classList.contains("sidebar-list-item")) {
    renderPageComponent(e.target.dataset.page);
    const sidebarItemsList = document.querySelectorAll(".sidebar-list-item");
    highliteActive(sidebarItemsList, e.target);
    initPage();
  }

  if (e.target.classList.contains("header_item")) {
    const headerItemsList = document.querySelectorAll(".header_item");
    highliteActive(headerItemsList, e.target);
    renderMainPage(e.target.dataset.page);
    if (e.target.classList.contains("search")) {
      initPage();
    }
  }
}

function highliteActive(sidebarList, $target) {
  sidebarList.forEach((el) => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    }
  });
  $target.classList.add("active");
}

export function initPage() {
  initMinDate();
  const countryField = document.querySelectorAll(".country-picker");
  fillCountries(countryField);
}
