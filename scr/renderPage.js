import { pages } from "./pages.js";
import { initPage } from "./script.js";

export function renderMainPage(page, object) {
  const $mainPage = document.getElementById("mainPage");

  $mainPage.innerHTML = pages[page]();

  if (page === "search") {
    if (object) {
      renderPageComponent(object.type);
      initPage();
      const $inputs = $mainPage.querySelectorAll(".form-input");
      const keys = Object.keys(object);
      const newKeys = keys.filter((el) => el != "id");

      newKeys.forEach((element) => {
        $inputs.forEach((input) => {
          if (input.name === element) {
            setTimeout(() => {
              input.value = object[element];
            }, 500);
          }
        });
      });
    } else {
      renderPageComponent("flightsEditForm");
      initPage();
    }
  }
}

export function renderPageComponent(componentName) {
  const pagecontainer = document.getElementById("page_container");
  pagecontainer.innerHTML = pages[componentName]();
}
