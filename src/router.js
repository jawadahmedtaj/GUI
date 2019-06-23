import Vue from 'vue';
import Router from 'vue-router';
import TodoList from './components/TodoList.vue';
import About from './components/About.vue';
import SignUp from './components/SignUp.vue';
import barChart from './components/barChart.vue';
import boxPlot from './components/boxPlot.vue';
import Login from './components/Login.vue';
import BackupBar from './components/BackupBar.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Login',
			component: Login
		},
		{
			path: '/TodoList',
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
			path: '/SignUp',
			name: 'SignUp',
			component: SignUp
		},
		{
			path: '/barChart',
			name: 'barChart',
			component: barChart
		},
		{
			path: '/boxPlot',
			name: 'boxPlot',
			component: boxPlot
		},
		{
			path: '/BackupBar',
			name: 'BackupBar',
			component: BackupBar
		}
	]
});
