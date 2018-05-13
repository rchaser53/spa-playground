import Vue from 'vue'
import Router from 'vue-router'

import { HogeRoutes } from './hoge/hoge' 
import { ParentRoutes } from './parent/parent' 
import { VueSelectRoutes } from './vue-select/vue-select'
import { VueScrollRoutes } from './vue-scroll/vue-scroll'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
    ...HogeRoutes,
    ...ParentRoutes,
    ...VueSelectRoutes,
    ...VueScrollRoutes,
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
