<script lang='ts'>
import axios from 'axios'
import Vue from 'vue'
import Component from 'vue-class-component'

import { httpClient } from '../../utils/http/client'
import { addPageUtils } from '../../utils/page/addPageUtils'
import ParentTemplateMixin from './parent/ParentTemplateMixinB.vue'
import Parent, { createClass } from './parent/Parent.vue'

const decoratorInput = {
  mixins: [ ParentTemplateMixin ],
  mounted: async function(this: Parent) {
    try {
      const { data } = await this.httpClient.get(this.articleEndpoint);
      this.article = data;
    } catch (err) {
      if (axios.isCancel(err)) {
        return
      }
      this.emitEventBus('error', err)
      this.emitEventBus('global-modal:open', 'hogya-')
    }
  },
  methods: {
    gubera(this: Parent) {
      this.emitEventBus('error', 'Nya-n')
    }
  },
  data: {
    articleEndpoint: '/article',
  }
}

const decoratorObject = addPageUtils(httpClient, decoratorInput)
export default createClass(decoratorObject)

</script>