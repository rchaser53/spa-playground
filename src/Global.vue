<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import axios, { CancelTokenSource } from 'axios'


@Component({
  beforeDestroy(this: Global) {
    this.cancelSource.cancel('nya-n')
  }
})
export default class Global extends Vue {
  cancelSource = axios.CancelToken.source()
  eventHandler = new Vue()
}

</script>