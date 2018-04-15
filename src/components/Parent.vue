<script lang='ts'>
import Vue from 'vue'
import Component, { createDecorator, mixins } from 'vue-class-component'

import Axios from 'axios'
import Child from './Child.vue'
import ParentTemplateMixin from './ParentTemplateMixin.vue'

const axios = Axios.create({
  baseURL: 'http://localhost:3000'
})

const CancelToken = Axios.CancelToken;

export const createClass = function(httpClient, mixinsComponent) {
  const decoratorObj = {
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
    },
  }

  @Component(decoratorObj)
  class Parent extends mixins(ParentTemplateMixin) {
    cancelToken = CancelToken.source()
    article = {
      textA: '',
      textB: '',
      selectA: ''
    }
    nyan: string = ''

    getEndpoint(): string {
      return this.nyan
    }

    createSetter(key: string) {
      return (value) => {
        Vue.set(this.article, key, value)
      }
    }
  }

  return Parent
}
export default createClass(axios, ParentTemplateMixin)

</script>