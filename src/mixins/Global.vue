<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import axios, { CancelTokenSource } from 'axios'
import { cancelTokenSource } from '../http/serverA'

export const createDecoratorObj = (client) => {
  return {
    mounted(this: Global) {
      this.$once('error', (err) => {
        console.error(err)
      })
    },
    beforeDestroy(this: Global) {
      this.cancelSource.cancel('nya-n')
    },
  }
}

const decoratorObj = createDecoratorObj({})
@Component(decoratorObj)
export default class Global extends Vue {
  cancelSource: CancelTokenSource = cancelTokenSource
}

</script>