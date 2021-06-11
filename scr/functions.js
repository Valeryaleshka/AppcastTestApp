import { initMinDate } from "./calendarHandle.js";
import { renderMainPage } from "./render.js";
import { fillCities } from "./workWithApi";

export function clearForm(e) {
  if (e.target.classList.contains("clearAll")) {
    const $form = document.querySelector(".edited-form");
    const $inputs = $form.querySelectorAll(".form-input");

    $inputs.forEach((element) => {
      element.value = "";
    });
    initMinDate();
    clearResulst();
  }
}

export function clearResulst() {
  const results = document.getElementById("results");
  results.innerHTML = "";
}

export function deleteHistoryItem(e) {
  if (e.target.classList.contains("delete-list-item")) {
    const listItem = e.target.closest(".history-list-item");
    const currentStorage = window.localStorage.getItem("history");
    const jsonCurrentStorage = JSON.parse(currentStorage);
    const newStorage = jsonCurrentStorage.filter((elem) => elem.id != listItem.dataset.id);
    window.localStorage.setItem("history", JSON.stringify(newStorage));
    renderMainPage("searchHistory");
  }
}

export function backToMainWithParameters(e) {
  if (e.target.classList.contains("list-item-text")) {
    const listItem = e.target.closest(".history-list-item");
    const currentStorage = window.localStorage.getItem("history");
    const jsonCurrentStorage = JSON.parse(currentStorage);
    const idObject = jsonCurrentStorage.filter((elem) => elem.id === listItem.dataset.id)[0];

    renderMainPage("search", idObject);
  }
}

export function initCitiesSelector(e) {
  if (e.target.classList.contains("country")) {
    const value = e.target.value;
    const container = e.target.closest(".location-form-container");
    const citypicker = container.querySelectorAll(".city-picker");
    fillCities(value, citypicker);
  }
}

export function createOptionsForSelecters(items) {
  let options = "";
  options += `<option value=""></option>`;
  items.forEach((item) => {
    options += `<option value="${item}">${item}</option>`;
  });

  return options;
}

export function saveResultToHistory(values) {
  let myStorage = window.localStorage.getItem("history");
  if (myStorage) {
    const array = JSON.parse(myStorage);
    array.push(values);
    localStorage.setItem("history", JSON.stringify(array));
  } else {
    localStorage.setItem("history", JSON.stringify([values]));
  }
}
