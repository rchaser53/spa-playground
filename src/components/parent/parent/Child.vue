<template>
  <div>
    <div>
      <input v-model="textA" />
    </div>
    <div>
      <input v-model="textB" />
    </div>
    <sfc nyan="111"></sfc>
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
import Sfc from './Sfc.vue'

@Component({
  props: {
    createSetter: Function,
    article: Object
  },
  components: {
    Sfc
  }
})
export default class Child extends Vue {
  get textA() {
    return this.$props.article.textA
  }
  set textA(value) {
    this.$props.createSetter('textA')(value)
  }

  get textB() {
    return this.$props.article.textB
  }
  set textB(value) {
    this.$props.createSetter('textB')(value)
  }

  setSelectA(event) {
    this.$props.createSetter('selectA')(event.target.value)
  }
}
</script>