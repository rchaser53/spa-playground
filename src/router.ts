import Vue from 'vue'
import Router from 'vue-router'
import NativeTs from './components/native-ts.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/hoge',
			name: 'hoge',
			component: {
				template: '<div>myaou</div>'
			}
		},
		{
			path: '/*',
			name: 'error',
			component: {
				template: '<div><slot></slot></div>'
			}
		}
	]
})

router.onReady(({ name }) => {
	document.title = name
})

export default router
