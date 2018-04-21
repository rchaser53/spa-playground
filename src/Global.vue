<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import axios, { CancelTokenSource } from 'axios'

@Component({
  mounted() {
    this.$on('error', (err) => {
      console.error(err)
    })
  },
  beforeDestroy(this: Global) {
    this.cancelSource.cancel('nya-n')
  },
})
export default class Global extends Vue {
  cancelSource = axios.CancelToken.source()
}

</script>