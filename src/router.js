import Vue from 'vue';
import Router from 'vue-router';
import TodoList from './components/TodoList.vue';
import About from './components/About.vue';
//import Chart from './components/Chart.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'TodoList',
			component: TodoList
		},
		{
			path: '/About',
			name: 'About',
			component: About
			// // route level code-splitting
			// // this generates a separate chunk (about.[hash].js) for this route
			// // which is lazy-loaded when the route is visited.
			// component: () => import(/* webpackChunkName: "about" */ './components/About.vue')
		}/*,
		{
			path: '/Chart',
			name: 'Chart',
			component: Chart
		}*/
	]
});
