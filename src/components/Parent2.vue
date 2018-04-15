<template>
  <div>
    <button @click="getEndpoint">button</button>
    <child :create-setter="createSetter" :article="article"></child>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { createClass } from './Parent'
import Component, { createDecorator } from 'vue-class-component'

import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://localhost:3000'
})

const abc = createDecorator((options, key) => {
  (options.mixins as any).push({
    data() {
      return {
        nyan: '2222'
      }
    }
  })
})

export default createClass(axios, abc)
</script>