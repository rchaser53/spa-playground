<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
const eventBus = new Vue();

@Component({
  methods: {
    onEventBusOnce(key, func) {
      eventBus.$once(key, func)
    },
    onEventBus(key, func) {
      eventBus.$on(key, func)
    },
    offEventBus(key, func) {
      eventBus.$off(key, func)
    },
    emitEventBus(key, value) {
      eventBus.$emit(key, value)
    },
  }
})
export default class EventBus extends Vue {}

</script>