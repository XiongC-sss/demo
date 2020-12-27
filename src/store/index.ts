import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyword: ''
  },
  mutations: {
    setKeyword (state, value) {
      state.keyword = value
    }
  },
  getters: {
    keyword: state => state.keyword
  },
  actions: {
  },
  modules: {
  }
})
