class Storage {
  get(key) {
    localStorage.getItem(key);
  }
  set(key, value) {
    localStorage.setItem(key, value);
  }
  clear() {
    localStorage.clear();
  }
  removeItem(key) {
    localStorage.removeItem(key);
  }
}

export default new Storage();
