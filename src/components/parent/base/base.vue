<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

import ParentTemplateMixin from './ParentTemplateMixin.vue'
import Child from '../../Child.vue'

export interface IParent {
	article: {
    textA: string
    textB: string
    selectA: string
  }
  articleEndpoint: string
}

@Component
export class Parent extends Vue implements IParent {
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