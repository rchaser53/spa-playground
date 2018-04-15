<template>
  <div>
    <child :create-setter="createSetter" :article="article"></child>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

import Axios from 'axios'
import Child from './Child.vue'

const axios = Axios.create({
  baseURL: 'http://localhost:3000'
})

const CancelToken = Axios.CancelToken;
const source = CancelToken.source()

const createComponent = (httpClient, cancelToken) => {
  @Component({
    components: {
      Child,
    },
    mounted: async function(this: Parent) {
      try {
        const { data } = await httpClient.get('/article', {
          cancelToken: cancelToken.token
        })
        this.article = data;
      } catch (err) {
        console.error(err)
      }
    },
    beforeDestroy() {
      cancelToken.cancel('move another path')
    }
  })
  class Parent extends Vue {
    article = {
      textA: '',
      textB: '',
      selectA: ''
    }

    createSetter(key: string) {
      return (value) => {
        Vue.set(this.article, key, value)
      }
    }
  }

  return Parent
}
export default createComponent(axios, source)

</script>