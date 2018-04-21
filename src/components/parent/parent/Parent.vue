<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

import ParentTemplateMixin from './ParentTemplateMixin.vue'
import Child from './Child.vue'

@Component
export class Parent extends Vue {
  article = {
    textA: '',
    textB: '',
    selectA: ''
  }
  articleEndpoint: string = ''

  createSetter(key: string) {
    return (value) => {
      Vue.set(this.article, key, value)
    }
  }
}

export const createClass = function(overwriteDecorator = {}) {
  const decoratorObj = {
    components: {
      Child,
    },
    ...overwriteDecorator
    // data, components, methodなどを変更する予定
  }

  @Component(decoratorObj)
  class Base extends Parent {}

  return Base
}

export default Parent
</script>