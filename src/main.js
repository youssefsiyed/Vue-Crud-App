// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import vueResource from 'vue-resource';
import VeeValidate from 'vee-validate'; /// validation form
import JsonExcel from 'vue-json-excel'; /// emport excel
import router from './route';

Vue.config.productionTip = false;
Vue.component('downloadExcel', JsonExcel);

Vue.use(vueResource);
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
