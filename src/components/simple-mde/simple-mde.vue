<template>
  <div>
    <input id='simple-mde' />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css">
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import SimpleMdeClass from 'simplemde'

@Component({
  mounted(this: SimpleMde) {
    this.simpleMde = new SimpleMdeClass({
                      element: document.querySelector('#simple-mde')
                    })
  }
})
export default class SimpleMde extends Vue {
  simpleMde: SimpleMdeClass
}
</script>