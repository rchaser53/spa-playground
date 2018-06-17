<template>
  <div>
    <div id='spinner'></div>
    <button @click="spin">spin</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Spinner } from 'spin.js'
const opts = {
  lines: 17, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  // scale: 2, // Scales overall size of the spinner
  // corners: 1, // Corner roundness (0..1)
  // color: '#ffffff', // CSS color or array of colors
  // fadeColor: 'transparent', // CSS color or array of colors
  speed: 1, // Rounds per second
  // rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick' // The CSS animation name for the lines
  // direction: 1, // 1: clockwise, -1: counterclockwise
  // zIndex: 2e9, // The z-index (defaults to 2000000000)
  // className: 'spinner', // The CSS class to assign to the spinner
  // // top: '50%', // Top position relative to parent
  // // left: '50%', // Left position relative to parent
  // shadow: '0 0 1px transparent', // Box-shadow for the lines
  // // position: 'absolute' // Element positioning
}

@Component({})
export default class SpinnerVue extends Vue {
  spinner = new Spinner(opts)

  spin() {
    const $spinner = document.querySelector('#spinner') as HTMLElement
    this.spinner.spin($spinner)

    // setTimeout(() => {
    //   this.stop()
    // }, 3000)
  }

  stop() {
    this.spinner.stop()
  }
}
</script>

<style>
@keyframes spinner-line-fade-more {
  0%,
  100% {
    opacity: 0; /* minimum opacity */
  }
  1% {
    opacity: 1;
  }
}

@keyframes spinner-line-fade-quick {
  0%,
  39%,
  100% {
    opacity: 0.25; /* minimum opacity */
  }
  40% {
    opacity: 1;
  }
}

@keyframes spinner-line-fade-default {
  0%,
  100% {
    opacity: 0.22; /* minimum opacity */
  }
  1% {
    opacity: 1;
  }
}
</style>
