<template>
	<div>
		<p><a href="/hoge">hoge</a></p>
		<p><router-link to='fuga'>fuga</router-link></p>
		<p><router-link to='hoge'>hoge2</router-link></p>
    <p><router-link to='parent'>parent</router-link></p>
		{{thisPath}}
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
	name: 'Modal',
	props: {
		show: Boolean,
		onClose: Function
	},
	mounted(this: Sidebar) {
		this.$router.beforeEach((to, _ , next) => {
			this.currentPath = to.path
			next();
		})
	},
})
export default class Sidebar extends Vue {
	currentPath = 'aa'

	get thisPath() {
		return `here is :${this.currentPath}`
	}
}
</script>