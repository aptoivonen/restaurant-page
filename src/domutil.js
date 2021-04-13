function createElement(type, classes, textContent) {
  if (!type) return null;
  const el = document.createElement(type);
  if (classes) el.className = classes;
  if (textContent) el.textContent = textContent;
  return el;
}

export { createElement };
