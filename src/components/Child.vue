<template>
  <div>
    <div>
      <input v-model="watchObj.textA" />
    </div>
    <div>
      <input v-model="watchObj.textB" />
    </div>
    <div>
      <select :value="article.selectA" @change="setSelectA">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option> 
      </select>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

import Child from './Child.vue'

@Component({
  props: {
    createSetter: Function,
    article: Object
  },
	components: {
		Child,
  },
  watch: {
    'watchObj.textA'(newVal, _) {
      this.$props.createSetter('textA')(newVal)
    },
    'watchObj.textB'(newVal) {
      this.$props.createSetter('textB')(newVal)
    },
  },
})
export default class Sidebar extends Vue {
  watchObj = {
    textA: '',
    textB: ''
  }

  setSelectA(event) {
    this.$props.createSetter('selectA')(event.target.value)
  }
}
</script>