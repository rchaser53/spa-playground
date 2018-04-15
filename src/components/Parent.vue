<script lang='ts'>
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'

import { httpClient, cancelToken } from '../utils/http'
import ParentTemplateMixin from './ParentTemplateMixin.vue'
import Child from './Child.vue'

export const createClass = function(client, templateMixin) {
  const decoratorObj = {
    components: {
      Child,
    },
    mounted: async function(this: Parent) {
      try {
        const { data } = await client.get('/article', {
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
  class Parent extends mixins(templateMixin) {
    cancelToken = cancelToken.source()
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
export default createClass(httpClient, ParentTemplateMixin)

</script>