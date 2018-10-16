<template>
<div class="nav-switches">
	<div class="item" v-for="(item, index) in icons" :key="index" :class="{'active': currentIndex === index}" @click.stop="selectNav(index)" >
		<figure>
			<img :src="item.path">
		</figure>
		<p>{{item.name}}</p>
	</div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
props: {
	icons:{
		type: Array,
		default() {
			return  [
				{ path : '/home_0_selected.png', name: '需求广场'},
				{ path : '/home_1.png', name: '个人中心'}
			]
		}
	},
	currentIndex:{
		type: Number,
		default: 0
	}
},
data() {
	return {
		
	}
},
methods: {
	selectNav(index) {
		this.$emit('selectNav', index)
	}

}
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "~assets/scss/variable";
.nav-switches {
	display: flex;
	align-items: center;
	justify-content: space-around;
	text-align: center;
	line-height: 1.8;
	.item {
		figure {
			width: 30px;
			height: 24px;
			margin: 0 auto;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}
		&.active {
			color: $color-text-l;
		}
	}
}
</style>