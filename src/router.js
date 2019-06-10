import Vue from 'vue';
import Router from 'vue-router';
import TodoList from './components/TodoList.vue';
import About from './components/About.vue';
import GChart from './components/GChart.vue';
import SignUp from './components/SignUp.vue';
import Chart from './components/Chart.vue';

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
		},
		{
			path: '/GChart',
			name: 'GChart',
			component: GChart
		},
		{
			path: '/SignUp',
			name: 'SignUp',
			component: SignUp
		},
		{
			path: '/Chart',
			name: 'Chart',
			component: Chart
		}
	]
});
