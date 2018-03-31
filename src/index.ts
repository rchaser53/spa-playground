import Vue from 'vue'

import router from './router'
import store from './store/store'

import App from './App.vue'
import Modal from './components/Modal.vue'

Vue.component('modal', Modal)

new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	}
})
