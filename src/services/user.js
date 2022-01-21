import Api from "./api.js";
import storage from "./storage.js";

class User {
  async login(email, password) {
    const response = await Api.request("/user/login", "POST", {
      email,
      password,
    });
    if (response.data.message) {
      return response.data;
    }
    storage.set("token", response.data.accessToken);
    storage.set("userData", JSON.stringify(response.data.user));
    return response.data;
  }
  async register(email, password, name) {
    const response = await Api.request("/user/registration", "POST", {
      email,
      password,
      name,
    });
    if (response.data.message) {
      return response.data;
    }
    storage.set("token", response.data.accessToken);
    storage.set("userData", JSON.stringify(response.data.user));
    return response.data;
  }
  async logout() {
    await Api.request("/user/logout", "POST");
    storage.clear();
    window.location.reload();
  }
  get isAutorized() {
    const token = storage.get("token");
    if (token == "" || token == undefined) {
      return false;
    }
    return true;
  }
  get getData() {
    return storage.get("userData");
  }
}

export default new User();
