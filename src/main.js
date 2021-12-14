import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueForm from 'vue-form'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueForm);


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
