<template>
	<div :class="$style.app">
		<!-- <modal :show="isOpen" :onClose="closeLoading" ></modal> -->
		<!-- <button @click="openModal">open</button> -->
		<slot name="sidebar"></slot>
		<!-- <sidebar></sidebar> -->
		<router-view>
			<slot name="main"></slot>
		</router-view>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
// import Sidebar from './components/Sidebar.vue'
import Component from 'vue-class-component'
import { mapActions, mapGetters } from 'vuex'
import { VueConstructor } from 'vue/types/vue';

export interface IApp {
	hongya: number
}
namespace VueConstructor {
	type hongya = number
}
export type Haaa = VueConstructor<Vue>

@Component({
	methods: {
		...mapActions('modal', {
			openModal(this: Haaa, dispatch) {
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
	components: {}
})
export default class App extends Vue implements IApp {
	hongya = 23
}
</script>

<style module>
.app {
	display: flex;
	width: 100%;
}
</style>
