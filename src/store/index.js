import { createStore } from 'vuex';
import axios from 'axios';

const BASE_URL = 'http://localhost:3333/user';

export default createStore({
  state: {
    details: null,
    loading: false,
    error: '',
  },
  mutations: {
    beginAction(state) {
      state.loading = true;
      state.error = '';
    },
    setAccountDetails(state, payload) {
      state.details = payload;
      localStorage.setItem('user', payload.id);
    },
    logout(state) {
      state.details = null;
      localStorage.removeItem('user');
    },
  },
  actions: {
    async register({ state, commit }, profile) {
      commit('beginAction');
      try {
        const { data } = await axios.post(BASE_URL, profile);
        commit('setAccountDetails', data);
      } catch (error) {
        state.error = error;
      }
      state.loading = false;
    },
    async getAccountDetails({ state, commit }, uid) {
      commit('beginAction');
      try {
        const { data } = await axios.get(`${BASE_URL}/${uid}`);
        commit('setAccountDetails', data);
      } catch (error) {
        state.error = error;
      }
      state.loading = false;
    },
    async logEvent({ state, commit }, event) {
      commit('beginAction');
      if (state.details) {
        try {
          await axios.post(`${BASE_URL}/event`, { user: state.details.id, event });
        } catch (error) {
          state.error = error;
        }
      }
      state.loading = false;
    },
  },
});
