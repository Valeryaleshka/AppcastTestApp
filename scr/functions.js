import { renderMainPage } from "./renderPage";

export function clearForm(e) {
  if (e.target.id === "clearAll") {
    const $form = document.querySelector(".edited-form");
    const $inputs = $form.querySelectorAll(".form-input");

    $inputs.forEach((element) => {
      element.value = "";
    });
  }
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
