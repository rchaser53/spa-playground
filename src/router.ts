import Vue from 'vue'
import Router from 'vue-router'
import NativeTs from './components/native-ts.vue'
import Parent from './components/Parent.vue'

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
			path: '/parent',
			name: 'parent-child',
			component: Parent
    },
		{
			path: '/*',
			name: 'error',
			component: {
				template: '<div><slot></slot></div>'
			}
    },
	]
})

router.onReady(({ name }) => {
	document.title = name
})

export default router
