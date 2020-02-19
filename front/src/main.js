import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import vuetify from './plugins/vuetify';
import GAuth from 'vue-google-oauth2';

Vue.use(GAuth, {clientId: '962442152974-7o0e1a9e3pb31bpp51r039unqem2a2s0.apps.googleusercontent.com', scope: 'profile email https://www.googleapis.com/auth/plus.login'})
Vue.config.productionTip = false
// Vue.config.silent = true
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
