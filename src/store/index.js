import { createStore } from 'vuex'
import db from '@/assets/todo-app-vuejs.json'

export default createStore({
  state: {
    todos: db
  },
  mutations: {
    updateTodos(state, payload) {
      state.todos = payload;
    }
  },
  actions: {
    setTodos(commit, payload) {
      commit('updateTodos', payload);
    }
  },
  modules: {
  }
})
