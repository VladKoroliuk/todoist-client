import api from "../../services/api.js";

export default {
  state: {
    todos: [],
  },
  mutations: {
    UPDATE_TODOS(state, todos) {
      state.todos = todos;
    },
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
  },
  actions: {
    async loadTodos({ commit }) {
      const response = await api.request("/task", "GET");
      commit("UPDATE_TODOS", response.data);
    },
    async addTodo({ commit }, data) {
      const response = await api.request("/task", "POST", data);
      commit("ADD_TODO", response.data);
    },
  },
  getters: {
    todayTasks(state) {
      return state.todos;
    },
    taskData: (state) => (id) => {
      return state.todos.filter((t) => t._id == id)[0];
    },
  },
};
