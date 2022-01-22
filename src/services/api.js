class Api {
  async request(url, method, data = {}) {
    return window.axios({
      method,
      url,
      data,
    });
  }
}

export default new Api();
