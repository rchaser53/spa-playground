<template>
  <div>
    <p><router-link to='hoge'>hoge</router-link></p>
    <p><router-link to='parentA'>parent A</router-link></p>
    <p><router-link to='parentB'>parent B</router-link></p>
    <p><router-link to='vue-select'>vue-select</router-link></p>
    <p><router-link to='vue-scroll'>vue-scroll</router-link></p>
    <p><router-link to='simple-mde'>simple-mde</router-link></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'Modal',
  props: {
    show: Boolean,
    onClose: Function
  },
  mounted(this: Sidebar) {
    this.$router.beforeEach((to, _, next) => {
      this.currentPath = to.path
      next()
    })
  }
})
export default class Sidebar extends Vue {
  currentPath = 'aa'

  get thisPath() {
    return `here is :${this.currentPath}`
  }
}
</script>
