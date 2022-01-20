import Api from "./api.js";
import storage from "./storage.js";

class User {
  async login(email, password) {
    const response = await Api.request("/user/login", "POST", {
      email,
      password,
    });
    storage.set("token", response.accessToken);
    storage.set("userData", JSON.stringify(response.user));
    return response;
  }
  async register(email, password, name) {
    const response = await Api.request("/user/register", "POST", {
      email,
      password,
      name,
    });
    storage.set("token", response.accessToken);
    storage.set("userData", JSON.stringify(response.user));
    return response;
  }
  async logout() {
    await Api.request("/user/logout", "POST");
    storage.clear();
    window.location.reload();
  }
}

export default User();
