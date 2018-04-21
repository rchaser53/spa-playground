<template>
	<div :class="$style.app">
		<sidebar></sidebar>
		<router-view  style="padding-left:100px;"></router-view>
    <global-modal></global-modal>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Sidebar from './components/share/Sidebar.vue'
import GlobalModal from './components/share/GlobalModal.vue'
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
	components: {
    Sidebar,
    GlobalModal
  },
  mounted() {
    this.$i18n.locale = 'en'
  }
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
