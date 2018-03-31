import Vue from 'vue'
import Router from 'vue-router'
import NativeTs from './components/native-ts.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/hoge',
			name: 'HelloWorld',
			component: {
				template: '<div>myaou</div>'
			}
		},
		// this is kinda 404
		{
			path: '/*',
			component: {
				template: '<div>nya-n</div>'
			}
		}
	]
})
