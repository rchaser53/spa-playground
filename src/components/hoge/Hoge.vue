<template>
  <div style="padding-left: 5px;">
    <button @click="showThis">show This</button>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Parent extends Vue {
  showThis() {
    console.log(this)
  }
}
</script>
