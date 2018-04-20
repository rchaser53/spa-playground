<script lang='ts'>
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'

import { httpClient } from '../../utils/http'
import ParentTemplateMixin from './ParentTemplateMixin.vue'
import Parent, { createClass } from './base/base.vue'

const httpObject = {
  client: httpClient,
}

const decoratorObject = {
  mixins: [ ParentTemplateMixin ],
  mounted: async function(this: Parent) {
    try {
      const { data } = await httpClient.get(this.articleEndpoint, {
        cancelToken: this.cancelSource.token
      })
      this.article = data;
    } catch (err) {
      console.error(err)
    }
  },
  data() {
    return {
      articleEndpoint: '/article',
    }
  },
}
export default createClass(httpObject, decoratorObject)

</script>