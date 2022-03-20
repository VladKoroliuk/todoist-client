import api from "../../services/api.js";

export default {
  state: {
    projects: [],
    projectSections: [],
  },
  mutations: {
    ADD_PROJECT(state, project) {
      state.projects.push(project);
    },
    SET_PROJECTS(state, projects) {
      state.projects = projects;
    },
    SET_SECTIONS(state, sections) {
      state.projectSections = sections;
    },
    ADD_SECTION(state, section) {
      state.projectSections.push(section);
    },
    DELETE_SECTION(state, sectionID) {
      state.projectSections = state.projectSections.filter(
        (section) => section._id != sectionID
      );
    },
    RENAME_SECTION(state, { _id, name }) {
      const index = state.projectSections.findIndex(
        (section) => section._id == _id
      );
      if (index < 0) {
        return;
      }
      state.projectSections[index].name = name;
    },
  },
  actions: {
    async createProject({ commit }, project) {
      const response = await api.request("/project", "POST", project);
      commit("ADD_PROJECT", response.data);
    },
    async createProjectSection({ commit }, sectionData) {
      const response = await api.request(
        "/project/createProjectSection",
        "POST",
        sectionData
      );
      commit("ADD_SECTION", response.data);
    },
    async loadProjects({ commit }) {
      const { data: projects } = await api.request("/project", "GET");
      const { data: projectSections } = await api.request(
        "/project/projectSections",
        "GET"
      );
      commit("SET_PROJECTS", projects);
      commit("SET_SECTIONS", projectSections);
    },
    async createSection({ commit }, sectionData) {
      const response = await api.request(
        "/project/createProjectSection",
        "POST",
        sectionData
      );

      commit("ADD_SECTION", response.data);
    },
    async deleteSection({ commit }, sectionID) {
      const response = await api.request("/project/section", "DELETE", {
        id: sectionID,
      });
      commit("DELETE_SECTION", response.data._id);
    },
    async renameSection({ commit }, data) {
      const response = await api.request("/project/renameSection", "PATCH", {
        ...data,
      });
      commit("RENAME_SECTION", response.data);
    },
  },
  getters: {
    getProjectData: (state) => (projectID) => {
      return state.projects.find((project) => project._id == projectID);
    },
    getProjectSections: (state) => (projectID) => {
      return state.projectSections.filter(
        (section) => section.projectID == projectID
      );
    },
  },
};
