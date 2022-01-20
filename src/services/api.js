import axios from "axios";

class Api {
  async request(url, method, data = {}) {
    return axios({
      method: method,
      url: new URL(url, process.env.API_URL),
      data: data,
    });
  }
}

export default new Api();
