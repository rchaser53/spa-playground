<template>
	<div :class="$style.app">
		<modal :show="isOpen" :onClose="closeLoading" ></modal>
		<button @click="openModal">open</button>
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
		...mapActions('modal', {
			openModal(dispatch) {
				dispatch('CONFIRM')
			}
		}),
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
}
</script>

<style module>
.app {
	display: flex;
}
</style>
