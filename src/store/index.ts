import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeTab: 'home'
  },
  mutations: {
    setActiveTab (state, value) {
      state.activeTab = value
    }
  },
  getters: {
    activeTab: state => state.activeTab
  },
  actions: {
  },
  modules: {
  }
})
