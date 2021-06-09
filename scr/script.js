import "./../styles/styles.scss";
import { initMinDate, changeCalendarValue } from "./date.js";
import { getInputs } from "./inputs";
import { fillCities, fillCountries } from "./workWithApi.js";
import { VALIDATOR } from "./validator.js";
import { backToMainWithParameters, clearForm, deleteHistoryItem } from "./functions.js";
import { renderMainPage, renderPageComponent } from "./renderPage.js";

initPage();

document.addEventListener("click", checkCurrentPage);
document.addEventListener("click", backToMainWithParameters);
document.addEventListener("click", clearForm);
document.addEventListener("click", deleteHistoryItem);
document.addEventListener("change", changeCalendarValue);
document.addEventListener("submit", onFromSubmit);
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

function getValues($form) {
  const $inputs = $form.querySelectorAll(".form-input");

  const valuesObject = {};
  valuesObject.id = generateID();
  valuesObject.type = $form.id;

  $inputs.forEach((element) => {
    valuesObject[element.name] = element.value;
  });

  return valuesObject;
}

function generateID() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function onFromSubmit(e) {
  e.preventDefault();

  if (validateForm(e.target)) {
    console.log("form is valid");
    const onj = getValues(e.target);

    //create some fetch to submit form

    let myStorage = window.localStorage.getItem("history");
    if (myStorage) {
      const array = JSON.parse(myStorage);
      array.push(onj);
      localStorage.setItem("history", JSON.stringify(array));
    } else {
      localStorage.setItem("history", JSON.stringify([onj]));
      console.log(JSON.parse(myStorage));
    }
  } else {
    console.log("form is not valid");
  }
}

function validateForm($form) {
  const $inputs = getInputs($form);

  let isFormValid = true;

  $inputs.forEach(($input) => {
    const isInputValid = validateInput($input);

    if (!isInputValid) {
      isFormValid = false;
    }
  });

  return isFormValid;
}

function validateInput($input) {
  const $container = $input.closest(".form-group");
  const value = $input.value;

  let inputMessage = "valid";

  if ($input.dataset.validators) {
    $input.validators.forEach((validator) => {
      if (VALIDATOR[validator.name](value)) {
        inputMessage = `error--${validator.name}`;
      }
    });
  }

  if (inputMessage !== "valid") {
    $container.classList.add("has-error");
    $container.classList.add(inputMessage);
  } else {
    $container.classList.remove("has-error");
  }

  return inputMessage === "valid";
}

export function initPage() {
  initMinDate();
  const countryField = document.querySelectorAll(".country-picker");
  fillCountries(countryField);
}
