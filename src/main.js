import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/red-theme.css";
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Element);
Vue.prototype.$message = Element.Message;

Vue.config.productionTip = false;

const vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

export default vm;
