<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

import { httpClient as serverAClient } from '../../http/serverA'
import ParentTemplateMixin from './ParentTemplateMixin.vue'
import Parent, { createClass } from './base/base.vue'

export const createDecoratorObj = (client) => {
  return {
    mixins: [ ParentTemplateMixin ],
    mounted: async function(this: Parent) {
      try {
        const { data } = await client.get(this.articleEndpoint, {
          cancelToken: this.cancelSource.token
        })
        this.article = data;
      } catch (err) {
        this.$emit('error', err)
      }
    },
    data() {
      return {
        articleEndpoint: '/article',
        httpClient: client
      }
    },
  }
}
const decoratorObject = createDecoratorObj(serverAClient)
export default createClass(decoratorObject)

</script>