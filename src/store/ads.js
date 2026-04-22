export default {
  state: {
    ads: [
      {
        title: "First",
        desc: "First Desc",
        promo: true,
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        id: "1",
        userId: "1"
      },
      {
        title: "Second",
        desc: "Second Desc",
        promo: true,
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        id: "2",
        userId: "1"
      },
      {
        title: "Third",
        desc: "Third Desc",
        promo: true,
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        id: "3",
        userId: "2"
      },
      {
        title: "Fourth",
        desc: "Fourth Desc",
        promo: true,
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        id: "4",
        userId: "2"
      }
    ]
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    async createAd({ commit, getters }, payload) {
      payload.id = Math.random()
      payload.userId = getters.user != null ? getters.user.id : '1'
      
      commit('clearError', null, { root: true })
      commit('setLoading', true, { root: true })
      
      // Имитация запроса к серверу
      let isRequestOk = true
      let promise = new Promise((resolve) => {
        setTimeout(() => resolve('Done'), 2000)
      })
      
      if (isRequestOk) {
        await promise.then(() => {
          commit('createAd', payload)
          commit('setLoading', false, { root: true })
        })
      } else {
        await promise.then(() => {
          commit('setLoading', false, { root: true })
          commit('setError', 'Ошибка создания объявления', { root: true })
          throw new Error('Упс... Ошибка создания объявления')
        })
      }
    }
  },
  getters: {
    ads(state) {
      return state.ads
    },
    promoAds(state) {
      return state.ads.filter(ad => ad.promo)
    },
    myAds(state, getters) {
      if (!getters.user) return []
      return state.ads.filter(ad => ad.userId == getters.user.id)
    },
    adById(state) {
      return (id) => {
        return state.ads.find(ad => ad.id == id)
      }
    }
  }
}
