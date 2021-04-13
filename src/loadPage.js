import createHeader from "./header";
import createMain from "./main";

function init() {
  const root = document.getElementById("content");
  root.appendChild(createHeader());
  root.appendChild(createMain());
}

export default init;
