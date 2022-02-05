import api from "../../services/api.js";

export default {
  state: {
    labels: [],
  },
  mutations: {
    UPDATE_LABELS(state, labels) {
      state.labels = labels;
    },
    PUSH_LABEL(state, label) {
      state.labels.push(label);
    },
    DELETE_LABEL(state, labelID) {
      console.log(labelID);
      state.labels = state.labels.filter((label) => label._id != labelID);
    },
  },
  actions: {
    async loadLabels({ commit }) {
      const response = await api.request("/label/", "GET");
      commit("UPDATE_LABELS", response.data);
    },
    async createLabel({ commit }, labelData) {
      const response = await api.request("/label/", "POST", labelData);
      commit("PUSH_LABEL", response.data);
    },
    async deleteLabel({ commit }, labelID) {
      const response = await api.request("/label/", "DELETE", { id: labelID });
      console.log(response);
      commit("DELETE_LABEL", response.data._id);
    },
  },
  getters: {
    getTaskLabels: (state) => (labelsList) => {
      return state.labels.filter((label) => labelsList.includes(label._id));
    },
    getLabelData: (state) => (labelID) => {
      return state.labels.find((label) => (label._id = labelID));
    },
  },
};
