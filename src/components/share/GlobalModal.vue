<template>
	<div :class="$style.modal" v-if="show">
		<div :class="$style.frame">
			{{message}}
		</div>
    <button @click="close">close</button>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import VueI18n from 'vue-i18n'

import HttpClient from '../../mixins/HttpClient.vue'
import EventBus from '../../mixins/EventBus.vue'
import { VueConstructor } from 'vue/types/vue'

export const insertUtilMixins = function(Mixins: VueConstructor[] = []) {
  @Component({
    mixins: Mixins,
    name: 'GlobalModal',
    created(this: GlobalModal) {
      this.onEventBus('global-modal:open', this.open)
      this.onEventBus('global-modal:close', this.close)
    }
  })
  class GlobalModal extends Vue {
    show: boolean = false
    message: string = ''

    open(message) {
      this.show = true
      this.message = message
    }

    close() {
      this.show = false
    }
  }

  return GlobalModal
}

export default insertUtilMixins([HttpClient, EventBus])
</script>

<style module>
.modal {
  position: absolute;
  top: 0px;
  left: 0px;
  display: block;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.1;
}

.frame {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
