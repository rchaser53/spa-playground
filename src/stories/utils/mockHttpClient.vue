<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

export const insertMockHttpClient = function(client) {
  @Component
  class MockHttpClient extends Base {
    httpClient = client
  }

  return MockHttpClient
}

@Component
export default class Base extends Vue {
  httpClient
}

</script>