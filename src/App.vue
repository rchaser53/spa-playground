<template>
	<div style="display: flex;">
		<slot></slot>
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class extends Vue {
	parentValue = 'parent value!!!'
}
</script>