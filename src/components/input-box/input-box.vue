<template>
<div class="search-box">
	<input ref="query" class="box" v-model="query" :placeholder="placeholder"/>
	<i v-show="query" @click.stop.prevent="clear" class="iconfont icon-shanchu_ icon-dismiss"></i>	
</div>
</template>

<script type="text/ecmascript-6">
import { debounce } from "assets/js/until";
export default {
	props: {
		placeholder: {
			type: String,
			default: '请输入手机号'
		},
		value: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			query: ''
		}
	},
	created() {
		if(this.value) this.query = this.value;
		this.$watch('query', debounce((newVal) =>{
			this.$emit('queryChange', newVal)
		},400))
	},
	methods: {
		clear() {
			this.query=''
		},
		setQuery(query) {
			this.query=query
		},
		blur() {
			this.$refs.query.blur()
		}
	}
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "~assets/scss/variable";
@import "~assets/scss/mixin";
.search-box {
	display: flex;
	align-items: center;
	box-sizing: border-box;
	width: 100%;
	height: 40px;
	@include border-1px($color-background);
	.icon-search {
		font-size: 16px;
		color: $color-text-d;
	}
	.box {
		flex: 1;
		margin: 0 5px;
		line-height: 18px;
		color: $color-text;
		font-size: $font-size-medium;
		&::placeholder {
			color: $color-text-d;
		}
	}
	.icon-dismiss {
		font-size: 16px;
		color: $color-text-d;
	}
}   
</style>