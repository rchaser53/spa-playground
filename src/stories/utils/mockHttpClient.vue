<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

export const insertMockHttpClient = function(httpClient) {
  @Component({
    data() {
      return {
        httpClient
      }
    }
  })
  class MockHttpClient extends Base {}

  return MockHttpClient
}

@Component
export default class Base extends Vue {
  httpClient
}

</script>