<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import axios, { CancelTokenSource } from 'axios'
import { httpClient } from '../utils/http/client'

@Component({
  mounted(this: HttpClient) {
    this.httpClient.refreshToken()
    this.onEventBusOnce('error', (err) => {
      console.error(err)
    })
  },
  beforeDestroy(this: HttpClient) {
    this.httpClient.cancelRequest()
  }
})
export default class HttpClient extends Vue {
  httpClient = httpClient
}
</script>
