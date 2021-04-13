import { createElement } from "./domutil";

function createMenu() {
  const section = createElement("section", "tab-section tab-section-active");
  section.setAttribute("data-index", "0");

  const cards = createElement("div", "cards");
  section.appendChild(cards);
  cards.appendChild(
    createCard({
      imgSource: "first-course.jpg",
      imgAlt: "First course",
      title: "Appetizing Clams and Zuccini",
      text:
        "This delicious first course prepares your palette for the main course. It includes clams from the Pacific and fresh zuccini.",
    })
  );
  cards.appendChild(
    createCard({
      imgSource: "soup.jpg",
      imgAlt: "Soup",
      title: "Baltic Zander Soup",
      text:
        "Zander straight from the Baltic in a spicy soup takes you back 15th-century Baltic piracy era.",
    })
  );
  cards.appendChild(
    createCard({
      imgSource: "dessert.jpg",
      imgAlt: "Dessert",
      title: "Pancakes with Bilberries and Sirup",
      text: "Pancakes served with ginger sirup, bilberries, and banana slices.",
    })
  );

  return section;
}

function createCard({ imgSource, imgAlt, title, text }) {
  const card = createElement("div", "card");

  const img = createElement("img");
  img.src = imgSource;
  img.alt = imgAlt;
  card.appendChild(img);

  const body = createElement("div", "body");
  card.appendChild(body);

  const h2 = createElement("h2", null, title);
  body.appendChild(h2);

  const para = createElement("p", null, text);
  body.appendChild(para);

  return card;
}

export default createMenu;
