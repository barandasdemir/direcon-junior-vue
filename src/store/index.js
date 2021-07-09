import { createStore } from 'vuex';
import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

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
      localStorage.removeItem('events');
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
        const { data } = await axios.post(`${BASE_URL}/user`, {
          ...profile,
          events: localStorage.getItem('events'),
        });
        commit('setAccountDetails', data);
      } catch (error) {
        state.error = error;
      }
      state.loading = false;
    },
    async getAccountDetails({ state, commit }, uid) {
      commit('beginAction');
      try {
        const { data } = await axios.get(`${BASE_URL}/user/${uid}`);
        commit('setAccountDetails', data);
      } catch (error) {
        localStorage.removeItem('user');
        state.error = error;
      }
      state.loading = false;
    },
    async logEvent({ state, commit }, event) {
      commit('beginAction');
      try {
        const user = state.details?.id;
        const { data } = await axios.post(`${BASE_URL}/event`, { event, user });
        const stored = localStorage.getItem('events');
        if (!user) {
          if (stored) {
            const events = JSON.parse(stored);
            events.push(data.id);
            localStorage.setItem('events', JSON.stringify(events));
          } else {
            localStorage.setItem('events', JSON.stringify([data.id]));
          }
        }
      } catch (error) {
        state.error = error;
      }
      state.loading = false;
    },
  },
});
