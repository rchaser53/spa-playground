<script lang='ts'>
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'

import { httpClient, cancelToken } from '../../utils/http'
import ParentTemplateMixin from './ParentTemplateMixinB.vue'
import Parent, { createClass } from './lib/base.vue'

const httpObject = {
  client: httpClient
}

const decoratorObject = {
  mixins: [ ParentTemplateMixin ],
  mounted: async function(this: Parent) {
    try {
      const source = cancelToken.source()
      const { data } = await httpClient.get(this.articleEndpoint, {
        cancelToken: source.token
      })
      this.article = data;
    } catch (err) {
      console.error(err)
    }
  },
  data() {
    return {
      articleEndpoint: '/article',
      cancelToken: cancelToken.source(),
    }
  },
  beforeDestroy(this: Parent) {
    this.cancelToken.cancel('move another path')
  },
}

export default createClass(httpObject, decoratorObject)

</script>