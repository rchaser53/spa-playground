import Vue from 'vue'
import VueI18n from 'vue-i18n'

import router from './router'
import store from './store/store'

import App from './App.vue'
import Modal from './components/modal/Modal.vue'

Vue.use(VueI18n)
Vue.component('modal', Modal)

const i18n = new VueI18n({
  locale: 'ja',
  messages: {
    en: {
      message: {
        hello: 'hello world',
        greeting: 'good morning, world!'
      }
    },
    ja: {
      message: {
        hello: 'こんにちは、世界',
        greeting: 'おはよう、世界！'
      }
    }
  }
})

new Vue({
  el: '#app',
  i18n,
	router,
	store,
	components: {
		App
	}
})
