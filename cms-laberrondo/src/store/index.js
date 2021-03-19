import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    ADD_POST(state, payload){
      state.posts.push(payload)
      console.log(state.posts)
    },
  },
  actions: {
    addArticle(context, payload) {
      context.commit('ADD_POST', payload)
    },
  },
  modules: {
  },
  getters: {
    Post(state) {
      return state.posts
    }
  },
})