<template>
	<div :class="$style.modal" v-if="show">
		<div :class="$style.frame">
			<button @click="onClose">close</button>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import VueI18n from 'vue-i18n'
import lang from './lang'

@Component({
	name: 'Modal',
	props: {
		show: Boolean,
		onClose: Function
  },
  // i18n: {
  //   messages: {
  //     en: { message: { hello: 'hello component1' } },
  //     ja: { message: { hello: 'こんにちは、component1' } }
  //   }
  // }
})
export default class extends Vue {}
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
