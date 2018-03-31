<template>
	<div :class="$style.app">
		<modal :show="isOpen" :onClose="closeLoading" ></modal>
		<button @click="open">open</button>
		<slot></slot>
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapGetters } from 'vuex'

@Component({
	methods: {
		...mapActions('modal', [
			'closeLoading', 'openModal'
		]),
	},
	computed: {
		...mapGetters('modal', [
			'isOpen'
		])
	},
})
export default class App extends Vue {
	open() {
		(this as any).openModal('CONFIRM')
	}
}
</script>

<style module>
.app {
	display: flex;
}
</style>
