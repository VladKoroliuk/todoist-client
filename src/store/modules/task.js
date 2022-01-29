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
    CHANGE_TODO(state, data) {
      const idx = state.todos.findIndex((t) => t._id == data._id);
      state.todos[idx] = Object.assign(state.todos[idx], data);
    },
    PERFORM_TODO(state, id) {
      state.todos = state.todos.filter((t) => t._id != id);
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
    async changeTodo({ commit }, data) {
      const response = await api.request("/task", "POST", data);
      commit("CHANGE_TODO", response.data);
    },
    async performTask({ commit }, id) {
      const response = await api.request("/task", "PUT", { id });
      commit("PERFORM_TODO", response.data._id);
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
