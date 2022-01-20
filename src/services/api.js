import axios from "axios";

class Api {
  async request(url, method, data = {}) {
    return axios({
      method: method,
      url: new URL(`/api${url}`, process.env.VUE_APP_API_URL),
      data: data,
    });
  }
}

export default new Api();
