import { pages, resultsPage } from "./pagesComponents.js";
import { initPage } from "./main.js";
import { clearResulst } from "./functions.js";

export function renderMainPage(page, object) {
  const $mainPage = document.getElementById("mainPage");

  $mainPage.innerHTML = pages[page]();
  clearResulst();
  if (page === "search") {
    if (object) {
      renderPageComponent(object.type);
      initPage();
      clearResulst();
      const $inputs = $mainPage.querySelectorAll(".form-input");
      const keys = Object.keys(object);
      const newKeys = keys.filter((el) => el != "id");

      newKeys.forEach((element) => {
        $inputs.forEach((input) => {
          if (input.name === element) {
            setTimeout(() => {
              input.value = object[element];
              const formsubmitButton = document.getElementById("submitForm");
              formsubmitButton.click();
            }, 200);
          }
        });
      });
    } else {
      renderPageComponent("flightsEditForm");
      initPage();
      clearResulst();
    }
  }
}

export function renderPageComponent(componentName) {
  const pagecontainer = document.getElementById("page_container");
  pagecontainer.innerHTML = pages[componentName]();
  clearResulst();
}

export function renderResults(type, array, value) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = resultsPage[type](array, value);
}
