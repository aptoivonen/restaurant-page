function init(doc) {
  const root = doc.getElementById("content");
  makeHeader();
  makeMain();

  function makeHeader() {
    const header = doc.createElement("header");
    root.appendChild(header);

    const h1 = doc.createElement("h1");
    h1.textContent = "My Sea Food Restaurant";
    header.appendChild(h1);

    const container = doc.createElement("div");
    container.className = "container";
    header.appendChild(container);

    const panel = doc.createElement("div");
    panel.className = "panel";
    container.appendChild(panel);

    const firstPara = doc.createElement("p");
    firstPara.textContent =
      "My restaurant offers a wide variaty of sea food for every mouth.";
    panel.appendChild(firstPara);

    const callToAction = doc.createElement("a");
    callToAction.href = "#main";
    callToAction.className = "call-to-action";
    callToAction.textContent = "Grab your bite!";
    panel.appendChild(callToAction);
  }

  function makeMain() {
    const main = doc.createElement("main");
  }
}

export { init };
