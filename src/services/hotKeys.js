const DEFAULT_KEYS = {
  MENU: 77,
  ADD_TASK: 78,
  HOME: 72,
};

function subscribeHotKey(keyCode, handler) {
  window.addEventListener("keyup", (event) => {
    if (event.keyCode == keyCode && !isSomethingFocused()) {
      return handler();
    }
  });
}

function getKeyByCode(code) {
  return String.fromCharCode(code);
}

function isSomethingFocused() {
  const activeTag = document.activeElement.localName;
  const tags = ["input", "textarea"];

  return tags.includes(activeTag);
}

export { subscribeHotKey, getKeyByCode, DEFAULT_KEYS };
