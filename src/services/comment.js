import api from "./api.js";

class Comment {
  async get(taskID) {
    const response = await api.request("/comment/", "GET");
    return response.data.filter((comment) => comment.task == taskID);
  }
  async create(comment) {
    const response = await api.request("/comment/", "POST", comment);
    return response.data;
  }
}

export default new Comment();
