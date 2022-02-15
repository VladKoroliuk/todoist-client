class Api {
  async request(url, method, data = {}, ContentType = "application/json") {
    return window.axios({
      method,
      url,
      data,
      headers: {
        "Content-Type": ContentType,
      },
    });
  }
}

export default new Api();
