import { createElement } from "./domutil";
import createMenu from "./menu";
import createContact from "./contact";

function createMain() {
  const main = createElement("main");

  const container = createElement("div", "container");
  main.appendChild(container);

  const tabsButtons = createElement("div", "tabs-buttons");
  container.appendChild(tabsButtons);

  const btn0 = createElement("button", "tab-button tab-button-active", "Menu");
  btn0.setAttribute("data-index", "0");
  tabsButtons.appendChild(btn0);

  const btn1 = createElement("button", "tab-button", "Contact");
  btn1.setAttribute("data-index", "1");
  tabsButtons.appendChild(btn1);

  const tabsSections = createElement("div", "tabs-sections");
  container.appendChild(tabsSections);
  tabsSections.appendChild(createMenu());
  tabsSections.appendChild(createContact());

  return main;
}

export default createMain;
