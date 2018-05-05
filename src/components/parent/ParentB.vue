<script lang='ts'>
import axios from 'axios'
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'

import { httpClient } from '../../utils/http/client'
import { addPageUtils } from '../../utils/page/addPageUtils'
import ParentTemplateMixin from './parent/ParentTemplateMixinB.vue'
import Parent, { createClass } from './parent/Parent.vue'

const decoratorObject = addPageUtils(httpClient, {
  mixins: [ ParentTemplateMixin ],
  mounted: async function(this: ParentA) {
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
  }
})

@Component(decoratorObject)
class ParentA extends Parent {
  articleEndpoint = '/article'

  gubera(this: Parent) {
    this.emitEventBus('error', 'Nya-n')
  }
}

export default createClass(mixins(ParentA))

</script>