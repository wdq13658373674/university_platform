import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Element from 'element-ui';
import "@/theme/blue/index.css";
// import "@/theme/red/index.css";
import plugins from './components/index';

Vue.use(Element);
Vue.prototype.$message = Element.Message;

Vue.use(plugins);

Vue.config.productionTip = false;

const vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

export default vm;
