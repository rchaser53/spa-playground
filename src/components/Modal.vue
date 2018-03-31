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

@Component({
	name: 'Modal',
	props: {
		show: Boolean,
		onClose: Function
	}
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
