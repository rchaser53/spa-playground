<script lang='ts'>
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'

import { httpClient, cancelToken } from '../../utils/http'
import ParentTemplateMixin from './ParentTemplateMixinB.vue'
import { createClass } from './lib/base.vue'

const httpObject = {
  client: httpClient,
  cancelToken
}
export default createClass(httpObject, ParentTemplateMixin)

</script>