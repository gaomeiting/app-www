<template>
<div class="carousel">
	<div class="carousel-container" ref="container">
		<div class="block" ref="block" v-for="(item, index) in list">
			<figure>
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539773787883&di=7016462523c424e795c1c371e9cfe0b0&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb2de9c82d158ccbffea08a4c14d8bc3eb13541a3.jpg">
			</figure>
			<h2>
				何文强
			</h2>
			<h4>
				北京天禄琳琅广告有限公司
			</h4>
			<p>
				“诺听科技是配音行业服务商中鲜有的具有技术灵魂的科技公司，在天禄琳琅的发展道路上一路有你，感谢诺听的相伴。诺听提供的专业服务得
			</p>
		</div>
	</div>
 	<a href="javascript:;" class="btn" @click="prev"></a>
	<a href="javascript:;" class="btn next" @click="next"></a>
</div>
</template>

<script type="text/ecmascript-6">
export default {
	data() {
		return {
			config : {
				index: 0,
				scale: 0.75
			},
			timer : null,
			blockLength: 0,
			list: [
				'<h1>1</h1>',
				'<h1>2</h1>',
				'<h1>3</h1>',
				'<h1>4</h1>',
			]
		}
	},
	created() {
		this.$nextTick(() => {
			this.blockLength = this.$refs.block.length
			this.prev()
		})
	},
	methods: {
		getOffSet() {
			let blocks = this.$refs.block
			let blocksLength = this.$refs.block && this.$refs.block.length
			let offsetWidth = this.$refs.container && this.$refs.container.offsetWidth
			//console.log('getoffset',this.$refs.block)
			for (let i = 0, len = blocksLength; i < len; i++) {
				//console.log(i, len, "循环")
				if (i == this.config.index) {
					let s = blocks[i].style
					let translate = (offsetWidth - 800) / 2
					s.transform = s.msTransform = s.webkitTransform = `translateX(${translate}px)`
					s.zIndex = 2
				} else {
					let s = blocks[i].style
					let translate = this.calculateTranslate(i, this.config.index, offsetWidth, blocks.length)
					s.transform = s.msTransform = s.webkitTransform = `translateX(${translate}px) scale(${this.config.scale})`
					s.zIndex = 1
				}
			}
		},
		// 计算卡片化中组件的位置
		// 当前组件 选中组件 容器宽度
		calculateTranslate(index, activeIndex, parentWidth, length) {
			if ((activeIndex == 0 && index == length - 1) || (index == activeIndex - 1)) {
				// 左边卡片
				return -(1 - this.config.scale) * (parentWidth + 800) / 4;
			}
			if ((activeIndex == length - 1 && index == 0) || (index == activeIndex + 1)) {
				// 右边卡片
				return (2 - this.config.scale) * (parentWidth / 2)
			}
			// 其他卡片
			return (1 + this.config.index / 4) * parentWidth
		},
		prev() {
			console.log("1232344")
			this.pauseTimer()
			if (this.config.index > 0) {
				this.config.index--
			} else {
				this.config.index = this.blockLength - 1
			}
			this.getOffSet()
			this.startTimer()
		},
		next() {
			this.pauseTimer()
			if (this.config.index < this.blockLength - 1) {
				this.config.index++
			} else {
				this.config.index = 0
			}
			this.getOffSet()
			this.startTimer()
		},
		pauseTimer() {
			if (this.timer) {
				clearInterval(this.timer)
			}
		},

		startTimer() {
			this.timer = setInterval(this.next, 3000)
		}
	}
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "~assets/scss/variable";
.carousel {
	position: relative;
}
.carousel-container {
	height: 380px;
	display: flex;
	align-items: center;
	position: relative;
	overflow: hidden;
}
.btn {
	display: block;
	width: 22px;
	height: 40px;
	background-image: url('/prev.png');
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	position: absolute;
	top: 45%;
	left: -22px;
	z-index: 100;
	&.next {
		background-image: url('/next.png');
		left: 100%;
	}
}
.block {
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 800px;
	height: 272px;
	transition: all 1s;
	border-radius: 4px;
	box-shadow: 1px 1px 6px rgba(0,0,0,0.1);
	background-color: $color-background-d;
	figure {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		overflow: hidden;
		border: 2px solid $color-background-d;
		box-shadow: 1px 1px 6px rgba(0,0,0,0.1);
		margin-bottom: 10px;
		margin-top: -40px;
		img {
			width: 100%;
			height: 100%;

		}
	}
	h2 {
		font-size: 24px;
		line-height: 54px;
		color: $color-text-l;
	}
	h4 {
		font-size: $font-size-medium-x;
		color: $color-text-d;
		margin-bottom: 32px;
	}
	p {
		padding: 0 50px;
		line-height: 1.5;

	}
}



h1 {
	position: absolute;
	top: 50%;
	width: 100%;
	text-align: center;
	transform: translateY(-50%);
	padding: 0;
	margin: 0;
} 
</style>