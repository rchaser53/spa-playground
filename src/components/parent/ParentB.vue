<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

import { httpClient as serverAClient } from '../../http/serverA'
import ParentTemplateMixin from './ParentTemplateMixin.vue'
import Parent, { createClass } from './base/base.vue'

const data = {
  articleEndpoint: '/article',
}

export const createDecoratorObj = (client, data, vueClass) => {
  const { articleEndpoint } = data

  return {
    mixins: [ ParentTemplateMixin ],
    mounted: async function(this: Parent) {
      try {
        const { data } = await client.get(articleEndpoint, {
          cancelToken: this.cancelSource.token
        })
        this.article = data;
      } catch (err) {
        console.error(err)
      }
    },
    data() {
      return {
        httpClient: client
      }
    },
  }
}
const decoratorObject = createDecoratorObj(serverAClient, data, Vue)
export default createClass(decoratorObject)

</script>