<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

import { httpClient as serverAClient } from '../../http/serverA'
import ParentTemplateMixin from './parent/ParentTemplateMixin.vue'
import Parent, { createClass } from './parent/Parent.vue'

const diData = {
  articleEndpoint: '/article',
}

export const createDecoratorObj = (client, data) => {
  const { articleEndpoint } = data

  return {
    mixins: [ ParentTemplateMixin ],
    mounted: async function(this: Parent) {
      try {
        const { data } = await client.get(articleEndpoint);
        this.article = data;
      } catch (err) {
        this.emitEventBus('error', err)
        this.emitEventBus('global-modal:open', 'hogya-')
      }
    },
    data(this: Parent) {
      return {
        httpClient: client,
        ...data
      }
    },
  }
}
const decoratorObject = createDecoratorObj(serverAClient, diData)
export default createClass(decoratorObject)

</script>