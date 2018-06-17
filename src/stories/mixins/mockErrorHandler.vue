<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

import EventBus from '~src/mixins/EventBus.vue'

@Component({
  mounted(this: EventBus) {
    this.onEventBus('error', (err) => {
      console.error('key: error', err)
    })

    this.onEventBus('global-modal:open', (err) => {
      console.error('key: global-modal:open', err)
    })
  },

  beforeDestroy(this: EventBus) {
    this.offEventBus('error')
    this.offEventBus('global-modal:open')
  }
})
export default class Base extends EventBus {}
</script>
