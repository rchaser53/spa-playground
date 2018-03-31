<template>
	<div :class="$style.app">
		<modal :show="modal.show" :onClose="onClose" ></modal>
		<slot></slot>
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class App extends Vue {
	modal = {
		show: true
	}

	onClose(this: App) {
		this.modal.show = false
	}
}
</script>

<style module>
.app {
	display: flex;
}
</style>
