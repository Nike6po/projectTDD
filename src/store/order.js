class Order {
  constructor(name, phone, adId, userId, done = false, id = null) {
    this.name = name
    this.phone = phone
    this.adId = adId
    this.userId = userId
    this.done = done
    this.id = id || Math.random()
  }
}

export default {
  state: {
    orders: []
  },
  mutations: {
    createOrder(state, payload) {
      state.orders.push(payload)
    },
    clearOrders(state) {
      state.orders = []
    }
  },
  actions: {
    async createOrder({ commit }, { name, phone, adId, userId }) {
      const payload = new Order(name, phone, adId, userId, false, Math.random())
      
      commit('clearError', null, { root: true })
      commit('setLoading', true, { root: true })
      
      // Имитация запроса к серверу
      let isRequestOk = true
      let promise = new Promise((resolve) => {
        setTimeout(() => resolve('Done'), 3000)
      })
      
      if (isRequestOk) {
        await promise.then(() => {
          commit('createOrder', payload)
          commit('setLoading', false, { root: true })
        })
      } else {
        await promise.then(() => {
          commit('setLoading', false, { root: true })
          commit('setError', 'Ошибка создания заказа', { root: true })
          throw new Error('Упс... Ошибка создания заказа')
        })
      }
    }
  },
  getters: {
    orders(state, getters) {
      if (getters.user == null) return []
      return state.orders.filter(order => order.userId == getters.user.id)
    }
  }
}
