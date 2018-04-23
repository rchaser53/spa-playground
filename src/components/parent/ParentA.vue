<script lang='ts'>
import axios from 'axios'
import Vue from 'vue'
import Component from 'vue-class-component'

import { httpClient } from '../../http/client'
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
        if (axios.isCancel(err)) return

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
const decoratorObject = createDecoratorObj(httpClient, diData)
export default createClass(decoratorObject)

</script>