import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
	store,
	router,
	render: (h) => h(App)
}).$mount('#app');
