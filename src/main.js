import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import BuyAdModal from './views/Shared/BuyAdModal.vue'

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .component('buy-ad-modal', BuyAdModal)
  .mount('#app')
