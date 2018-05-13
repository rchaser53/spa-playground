<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { eventBus } from './eventBus'

@Component({
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
export default class EventBus extends Vue {}

</script>