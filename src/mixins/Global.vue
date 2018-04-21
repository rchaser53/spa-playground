<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import axios, { CancelTokenSource } from 'axios'
import { cancelTokenSource } from '../http/serverA'
import { eventBus } from './Eventhub'

export const createDecoratorObj = (client, data) => {
  return {
    mounted(this: Global) {
      this.onEventBus('error', (err) => {
        console.error(err)
      })
    },
    beforeDestroy(this: Global) {
      this.cancelSource.cancel('nya-n')
    },
    methods: {
      onEventBus(key, func) {
        eventBus.$on(key, func)
      },
      emitEventBus(key, value) {
        eventBus.$emit(key, value)
      },
    }
  }
}

const decoratorObj = createDecoratorObj({}, {})
@Component(decoratorObj)
export default class Global extends Vue {
  cancelSource: CancelTokenSource = cancelTokenSource
}

</script>