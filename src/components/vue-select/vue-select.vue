<template>
  <div>
    <vue-select ref="vueSelect" multiple :options="options" :onChange="onChange"></vue-select>
    123
    <button @click="addOptions">add</button>
    <input type="text" v-model="text" />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import VueSelect from 'vue-select'

@Component({
  components: {
    VueSelect
  },
})
export default class ParentA extends Vue {
  $refs: any
  options = [
    'aaa', 'aab', 'aabc', 'aabcd'
  ]
  selected: string[] = []
  text = ''

  onChange(value) {
    this.selected = value
  }

  addOptions() {
    this.options.push(this.text)
    this.selected.push(this.text)
    this.$refs.vueSelect.search = ''
  }
}

</script>