import { createElement } from "./domutil";

function createContact() {
  const section = createElement("section", "tab-section");
  section.setAttribute("data-index", "1");

  const panel = createElement("div", "panel");
  section.appendChild(panel);

  const h2 = createElement("h2", null, "My Sea Food Restautant");
  panel.appendChild(h2);

  const para = createElement("p", null, "Telephone: 555-555 555");
  panel.appendChild(para);

  const address = createElement(
    "address",
    null,
    "Address: Milton Road 67, Miami, FL"
  );
  panel.appendChild(address);

  return section;
}

export default createContact;
