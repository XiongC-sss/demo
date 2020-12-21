import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeTab: 'Home',
    total: 10
  },
  mutations: {
    setActiveTab (state, value) {
      state.activeTab = value
    },
    setTotal (state, value) {
      state.total = value
    }
  },
  getters: {
    activeTab: state => state.activeTab,
    total: state => state.total
  },
  actions: {
  },
  modules: {
  }
})
