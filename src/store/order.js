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
      console.log('Order details:', { name, phone, adId, userId })
      commit('clearError', null, { root: true })
      
      // Имитация запроса к серверу
      let isRequestOk = true
      let promise = new Promise((resolve) => {
        setTimeout(() => resolve('Done'), 3000)
      })
      
      if (isRequestOk) {
        await promise.then(() => {
          const newOrder = {
            id: Math.random(),
            name: name,
            phone: phone,
            adId: adId,
            userId: userId,
            done: false
          }
          commit('createOrder', newOrder)
        })
      } else {
        await promise.then(() => {
          commit('setError', 'Ошибка создания заказа', { root: true })
          throw new Error('Упс... Ошибка создания заказа')
        })
      }
    }
  },
  getters: {
    orders(state) {
      return state.orders
    },
    userOrders(state, getters) {
      if (!getters.user) return []
      return state.orders.filter(order => order.userId == getters.user.id)
    }
  }
}
