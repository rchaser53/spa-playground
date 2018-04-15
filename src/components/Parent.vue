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

const createComponent = (httpClient) => {
  @Component({
    components: {
      Child,
    },
    mounted: async function(this: Parent) {
      try {
        const { data } = await httpClient.get('/article', {
          cancelToken: this.cancelToken.token
        })
        this.article = data;
      } catch (err) {
        console.error(err)
      }
    },
    beforeDestroy(this: Parent) {
      this.cancelToken.cancel('move another path')
    }
  })
  class Parent extends Vue {
    cancelToken = CancelToken.source()
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


export default createComponent(axios)

</script>