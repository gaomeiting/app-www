<template>
  <ul class="switches">
	<li class="switch-item" v-for="(item, index) in switches" :key="index" @click.stop="selectItem(index)" :class=" {'active' : currentIndex===index} ">
	  	<span> {{item.name}} </span>
	</li>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
	props: {
		currentIndex: {
			type: Number,
			default: 0
		},
		switches: {
			type: Array,
			default() {
				return []
			}
		}
	},
	methods: {
		selectItem(index) {
			this.$emit('switchItem', index)
		}
	}
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "~assets/scss/variable";
.switches {
	display: flex;
	align-items: center;
	width: 240px;
	margin: 0 auto;
	border: 1px solid $color-theme;
	border-radius: 5px;
	cursor: pointer;
	.switch-item {
		flex: 1;
		padding: 8px;
		text-align: center;
		font-size: $font-size-medium;
		color: $color-theme;
		&.active {
			background: $color-theme;
			color: $color-background-d;
		}
	}
}
</style>