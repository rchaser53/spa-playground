<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

import Child from './Child.vue'
import Fc from './Fc.vue'
import { VueConstructor } from 'vue/types/vue';

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

export const createClass = function(MixinClass: VueConstructor) {
  @Component({
    components: {
      Child,
      Fc
    }
  })
  class Base extends MixinClass {}

  return Base
}

export default Parent
</script>