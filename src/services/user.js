import Api from "./api.js";
import storage from "./storage.js";

class User {
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
  get avatar() {
    const url = new URL(
      `api/user/avatar/${this.getData.id}.jpg`,
      process.env.VUE_APP_API_URL
    );

    return url.href;
  }
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
  async changeName(name) {
    const response = await Api.request("/user/name", "PATCH", { name });
    if (response.data.message) {
      return response.data;
    }
    await this.logout();
  }
  async uploadAvatar(avatar) {
    if (avatar.size > 1000 * 1000 * 4 && avatar.type != "image/jpeg") {
      return "some error";
    }

    const formData = new FormData();
    formData.append("avatar", avatar);

    await Api.request("/user/avatar", "POST", formData, "image/jpeg");
  }
}

export default new User();
