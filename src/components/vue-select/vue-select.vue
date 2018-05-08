<template>
  <div>
    <vue-select multiple :options="options" :onChange="onChange"></vue-select>
    123
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import VueSelect from 'vue-select'

@Component({
  components: {
    VueSelect
  }
})
export default class ParentA extends Vue {
  options = [
    'aaa', 'aab', 'aabc', 'aabcd'
  ]
  selected = []

  onChange(value) {
    this.selected = value
  }
}

</script>