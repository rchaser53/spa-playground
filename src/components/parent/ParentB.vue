<script lang='ts'>
import axios from 'axios'
import Vue from 'vue'
import Component from 'vue-class-component'

import { httpClient } from '../../utils/http/client'
import { addPageUtils } from '../../utils/page/addPageUtils'
import ParentTemplateMixin from './parent/ParentTemplateMixinB.vue'
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
        const { data } = await (this as any).httpClient.get(articleEndpoint);
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
    methods: {
      gubera(this: Parent) {
        this.emitEventBus('error', 'Nya-n')
      }
    }
  }
}
const decoratorObject = addPageUtils(createDecoratorObj(httpClient, diData));
export default createClass(decoratorObject)

</script>