<template>
  <div>
    <child :create-setter="createSetter" :article="article"></child>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

import Child from './Child.vue'

@Component({
	components: {
		Child,
	},
})
export default class Sidebar extends Vue {
  article = {
    textA: '',
    textB: '',
    selectA: ''
  }

  createSetter(key: string) {
    return (value) => {
      Vue.set(this.article, key, value)
    }
  }
}
</script>