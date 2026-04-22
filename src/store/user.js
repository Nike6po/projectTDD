class User {
  constructor(id, email, password) {
    this.id = id
    this.email = email
    this.password = password
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      console.log(payload)
      state.user = payload
    }
  },
  actions: {
    async registerUser({ commit }, { email, password }) {
      commit('clearError', null, { root: true })
      commit('setLoading', true, { root: true })
      
      // Имитация запроса к серверу
      let isRequestOk = true
      let promise = new Promise((resolve) => {
        setTimeout(() => resolve('Done'), 2000)
      })
      
      if (isRequestOk) {
        await promise.then(() => {
          commit('setUser', new User(1, email, password))
          commit('setLoading', false, { root: true })
        })
      } else {
        await promise.then(() => {
          commit('setLoading', false, { root: true })
          commit('setError', 'Ошибка регистрации', { root: true })
          throw new Error('Упс... Ошибка регистрации')
        })
      }
    },
    async loginUser({ commit }, { email, password }) {
      commit('clearError', null, { root: true })
      commit('setLoading', true, { root: true })
      
      // Имитация запроса к серверу
      let isRequestOk = true
      let promise = new Promise((resolve) => {
        setTimeout(() => resolve('Done'), 2000)
      })
      
      if (isRequestOk) {
        await promise.then(() => {
          commit('setUser', new User(1, email, password))
          commit('setLoading', false, { root: true })
        })
      } else {
        await promise.then(() => {
          commit('setLoading', false, { root: true })
          commit('setError', 'Ошибка логина или пароля', { root: true })
          throw new Error('Упс... Ошибка логина или пароля')
        })
      }
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  }
}
