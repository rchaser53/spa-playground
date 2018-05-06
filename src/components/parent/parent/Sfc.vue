<template functional>
  <div>{{ props.nyan }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Sfc extends Vue {}
</script>