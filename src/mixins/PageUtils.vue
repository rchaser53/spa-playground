<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import axios, { CancelTokenSource } from 'axios'
import { httpClient } from '../utils/http/client'
import { eventBus } from './Eventhub'

@Component({
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
})
export default class Global extends Vue {
  httpClient = httpClient
}

</script>