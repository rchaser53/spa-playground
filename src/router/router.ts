import Vue from 'vue'
import Router from 'vue-router'

import { HogeRoutes } from './hoge/hoge' 
import { ParentRoutes } from './parent/parent' 

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
    ...HogeRoutes,
    ...ParentRoutes,
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
