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
  mounted(this: Parent) {
    setTimeout(() => {
      this.article = {
        textA: 'textA',
        textB: 'textB',
        selectA: '2',
      }
      console.log(22)
    }, 1000)
  }
})
export default class Parent extends Vue {
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