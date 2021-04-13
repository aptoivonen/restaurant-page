import { init } from "./loadPage";

init(document);

const tabsButtonsGroup = document.querySelector(".tabs-buttons");
const activeTabButtonClass = "tab-button-active";
const tabsSections = document.querySelectorAll(".tab-section");
const activeTabSectionClass = "tab-section-active";

function toggleTab(e) {
  if (!e.target.classList.contains("tab-button")) return;
  removeActiveFromButtonsAndTabs();
  const index = parseInt(e.target.dataset.index, 10);
  makeButtonAndTabActive(index);
}

function removeActiveFromButtonsAndTabs() {
  tabsButtonsGroup
    .querySelectorAll(".tab-button")
    .forEach((button) => button.classList.remove(activeTabButtonClass));
  tabsSections.forEach((section) =>
    section.classList.remove(activeTabSectionClass)
  );
}

function makeButtonAndTabActive(index) {
  tabsButtonsGroup
    .querySelectorAll(".tab-button")
    [index].classList.add(activeTabButtonClass);
  tabsSections[index].classList.add(activeTabSectionClass);
}

tabsButtonsGroup.addEventListener("click", toggleTab);
