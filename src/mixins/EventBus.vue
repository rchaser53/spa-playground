<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
const eventBus = new Vue();

@Component({
  methods: {
    onEventBusOnce(this: any, key, func) {
      this.emitKeys.push(key);
      eventBus.$once(key, func)
    },
    onEventBus(this: any, key, func) {
      this.emitKeys.push(key);
      eventBus.$on(key, func)
    },
    offEventBus(key, func) {
      eventBus.$off(key, func)
    },
    emitEventBus(key, value) {
      eventBus.$emit(key, value)
    },
  },
  beforeDestroy(this: EventBus) {
    this.emitKeys.forEach((key) => {
      this.offEventBus(key);
    })
  }
})
export default class EventBus extends Vue {
  emitKeys: string[] = []
}

</script>