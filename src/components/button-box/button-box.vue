<template>
<p class="btn" @click.stop="selected" :class="{'active': query}">{{ placeholder }}</p>
</template>

<script type="text/ecmascript-6">
import { debounce } from "assets/js/until";
export default {
	props: {
		placeholder: {
			type: String,
			default: '确认'
		},
		query: {
			type: String,
			default: ''
		},
		color: {
			type: String,
			default: '#000'
		}
	},
	data() {
		return {
		}
	},
	created() {
		
	},
	methods: {
		selected() {
			this.$emit('selected')
		}
	}
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "~assets/scss/variable";
.btn {
	width: 100%;
	height: 46px;
	border-radius: 6px;
	text-align: center;
	line-height: 46px;
	font-size: $font-size-medium-x;
	background-color: $color-background;
	&.active {
		background-color: $color-theme-d;
		color: $color-text-l;
	}
}  
</style>