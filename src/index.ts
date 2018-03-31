import Vue from 'vue'
import router from './router'

import App from './App.vue'
import Modal from './components/Modal.vue'

Vue.component('modal', Modal)

new Vue({
	el: '#app',
	router,
	components: {
		App
	}
})
