<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { CancelTokenSource } from 'axios'
import { cancelToken } from './utils/http'


@Component({
  beforeDestroy(this: Global) {
    this.cancelSource.cancel('nya-n')
  }
})
export default class Global extends Vue {
  cancelSource = cancelToken.source()
}

</script>