import { createElement } from "./domutil";

function createHeader() {
  const header = createElement("header");

  const h1 = createElement("h1", null, "My Sea Food Restaurant");
  header.appendChild(h1);

  const container = createElement("div", "container");
  header.appendChild(container);

  const panel = createElement("div", "panel");
  container.appendChild(panel);

  const firstPara = createElement(
    "p",
    null,
    "My restaurant offers a wide variaty of sea food for every mouth."
  );
  panel.appendChild(firstPara);

  const callToAction = createElement("a", "call-to-action", "Grab your bite!");
  callToAction.href = "#main";
  panel.appendChild(callToAction);

  return header;
}

export default createHeader;
