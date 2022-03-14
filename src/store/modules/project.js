import api from "../../services/api.js";

export default {
  state: {
    projects: [],
  },
  mutations: {
    ADD_PROJECT(state, project) {
      state.projects.push(project);
    },
    SET_PROJECTS(state, projects) {
      state.projects = projects;
    },
  },
  actions: {
    async createProject({ commit }, project) {
      const response = await api.request("/project", "POST", project);
      commit("ADD_PROJECT", response.data);
    },
    async loadProjects({ commit }) {
      const response = await api.request("/project", "GET");
      commit("SET_PROJECTS", response.data);
    },
  },
  getters: {},
};
