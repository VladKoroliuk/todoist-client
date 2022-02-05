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
    SET_LABELS(state, { _id, labels }) {
      const idx = state.todos.findIndex((t) => t._id == _id);
      state.todos[idx].labels = labels;
    },
  },
  actions: {
    async loadTodos({ commit }) {
      const response = await api.request("/task", "GET");
      commit("UPDATE_TODOS", response.data);
    },
    async addTodo({ commit }, todoData) {
      const response = await api.request("/task", "POST", todoData);
      commit("ADD_TODO", response.data);
    },
    async changeTodo({ commit }, changedData) {
      const response = await api.request("/task", "POST", changedData);
      commit("CHANGE_TODO", response.data);
    },
    async performTask({ commit }, id) {
      const response = await api.request("/task", "PUT", { id });
      commit("PERFORM_TODO", response.data._id);
    },
    async changeLabels({ commit }, { id, labels }) {
      const response = await api.request("/task/labels", "PATCH", {
        id,
        labels,
      });
      commit("SET_LABELS", response.data);
    },
  },
  getters: {
    todayTasks(state) {
      return state.todos;
    },
    taskData: (state) => (id) => {
      return state.todos.find((t) => t._id == id);
    },
    getTasksByLabel: (state) => (labelID) => {
      return state.todos.filter((t) => t.labels.includes(labelID));
    },
    countTasksByLabel: (state, getters) => (labelID) => {
      return getters.getTasksByLabel(labelID).length;
    },
  },
};
