<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import axios, { CancelTokenSource } from 'axios'
import { HttpClient } from '../http/client'
import { eventBus } from './Eventhub'

export const createDecoratorObj = (a, b) => {
  return {
    mounted(this: Global) {
      this.httpClient.refreshToken();
      this.onEventBusOnce('error', (err) => {
        console.error(err)
      })
    },
    beforeDestroy(this: Global) {
      this.httpClient.cancelRequest();
    },
    methods: {
      onEventBusOnce(key, func) {
        eventBus.$once(key, func)
      },
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
  httpClient: HttpClient = new HttpClient(axios.create())
}

</script>