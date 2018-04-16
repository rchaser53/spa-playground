<script lang='ts'>
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'

import { httpClient } from '../../utils/http'
import ParentTemplateMixin from './ParentTemplateMixinB.vue'
import { createClass } from './base.vue'

export default createClass(httpClient, ParentTemplateMixin)

</script>