<script lang='ts'>
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'

import { httpClient, cancelToken } from '../../utils/http'
import ParentTemplateMixin from './ParentTemplateMixin.vue'
import Child from '../Child.vue'

export const createClass = function(client, templateMixin, overwriteDecorator = {}) {
  const decoratorObj = {
    components: {
      Child,
    },
    mounted: async function(this: Base) {
      try {
        const { data } = await client.get(this.articleEndpoint, {
          cancelToken: this.cancelToken.token
        })
        this.article = data;
      } catch (err) {
        console.error(err)
      }
    },
    data() {
      return {
        articleEndpoint: '/article'
      }
    },
    beforeDestroy(this: Base) {
      this.cancelToken.cancel('move another path')
    },
    ...overwriteDecorator
    // data, components, methodなどを変更する予定
  }

  @Component(decoratorObj)
  class Base extends mixins(templateMixin) {
    cancelToken = cancelToken.source()
    article = {
      textA: '',
      textB: '',
      selectA: ''
    }
    articleEndpoint: string = ''

    createSetter(key: string) {
      return (value) => {
        Vue.set(this.article, key, value)
      }
    }
  }

  return Base
}

export default createClass(httpClient, ParentTemplateMixin)
</script>