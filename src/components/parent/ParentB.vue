<script lang='ts'>
import axios from 'axios'
import Vue from 'vue'
import Component from 'vue-class-component'

import HttpClient from '../../mixins/HttpClient.vue'
import EventBus from '../../mixins/EventBus.vue'
import ParentTemplateMixin from './parent/ParentTemplateMixinB.vue'
import Parent, { createClass } from './parent/Parent.vue'
import { VueConstructor } from 'vue/types/vue';

export const insertUtilMixins = function(Mixins: VueConstructor[] = []) {
  @Component({
    mixins: [ ParentTemplateMixin, EventBus, ...Mixins ],
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
  class ParentA extends Parent {
    articleEndpoint = '/article'

    gubera() {
      this.emitEventBus('error', 'Nya-n')
    }
  }

  return ParentA
}

export default createClass(insertUtilMixins([
  HttpClient
]))

</script>