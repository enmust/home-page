import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import animated from 'animate.css';

Vue.config.productionTip = false;

Vue.use(animated);

new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app');
