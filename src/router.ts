import Vue from 'vue'
import Router from 'vue-router'
import NativeTs from './components/native-ts.vue'
import Hoge from './components/Hoge.vue'
import ParentA from './components/parent/ParentA.vue'
import ParentB from './components/parent/ParentB.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/hoge',
			name: 'hoge',
			component: Hoge
    },
    {
			path: '/parenta',
			name: 'parent-child',
			component: ParentA
    },
    {
			path: '/parentb',
			name: 'parent2-child',
			component: ParentB
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
