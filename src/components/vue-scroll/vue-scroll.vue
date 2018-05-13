<template>
  <div class="wrapper" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false">
    <div class="option" v-for="(option, index) in options" :key="option">
      <div class="innerOption">
        <p>{{index}}</p>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component'
import infiniteScroll from 'vue-infinite-scroll';

@Component({
  directives: {
    infiniteScroll,
  },
})
export default class Scroll extends Vue {
  options = [
    'aaa', 'aab', 'aabc', 'aabcd'
  ]

  loadMore() {
    this.options.push(Date.now().toString())
  }
}
</script>

<style>
  .wrapper {
    display: block;
    width: 300px;
    height: 400px;
    overflow-y: scroll;
    overflow-x: visible;
  }

  .option {
    display: block;
    width: 300px;
    height: 100px;
    border: solid 1px black;
    background-color: aqua;
  }

  .innerOption {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
</style>