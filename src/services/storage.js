class Storage {
  get(key) {
    const data = localStorage.getItem(key);
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
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
