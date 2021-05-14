import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'All Tasks'
  },
  mutations: {
    SET_TITLE(state, payload) {
      state.title = payload
    }
  },
  actions: {
    setTitle({ commit }, payload) {
      commit('SET_TITLE', payload)
    }
  },
  modules: {}
})
