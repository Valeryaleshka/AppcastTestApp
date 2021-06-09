import { renderMainPage, renderPageComponent } from "./renderPage";
import { initPage } from "./script";

export function checkCurrentPage(e) {
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
