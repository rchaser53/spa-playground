<template>
  <div>
    <vue-select ref="vueSelect" multiple :options="options" v-model="selected"></vue-select>
    123
    <button @click="addOptions">add</button>
    <input type="text" v-model="text" />
    <spinner />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import VueSelect from 'vue-select'

import Spinner from '../share/Spinner.vue'

@Component({
  components: {
    VueSelect,
    Spinner
  },
})
export default class ParentA extends Vue {
  $refs: any
  options = [
    'aaa', 'aab', 'aabc', 'aabcd'
  ]
  selectedOption: string[] = []

  set selected(value) {
    console.log(value)
    this.selectedOption = value
  }
  get selected() {
    console.log(this.selectedOption)
    return this.selectedOption
  }
  text = ''

  onChange(value) {
    this.selected = value
  }

  addOptions() {
    this.options.push(this.text)
    this.selectedOption = this.selectedOption.concat([this.text])
    this.$refs.vueSelect.search = ''
  }
}

</script>