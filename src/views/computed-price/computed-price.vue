<template>
<div class="current" key="home">
	<div class="content-wrap">
		<div class="nav-bar-wrap">
			<nav-bar></nav-bar>
		</div>
		<div class="section-wrap">
			<div class="section">
				<h2>
					价格估算
				</h2>
				<div class="form-wrap">
					<div>
						<h3>语种</h3>
						<p class="lang">
							<span>普通话</span>
							<span>外语/小语种</span>
							<span>方言/民族语</span>
						</p>
					</div>
					<div>
						<h3>级别</h3>
						<!-- <el-select v-model="value" placeholder="请选择">
							<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
							</el-option>
						</el-select> -->
						<p>1系最高，7系最低，另有V系为特约老师，需预约</p>
					</div>
				</div>
				<a href="javascript:;" class="btn">计算</a>
			</div>
		</div>
		
		
		<div class="footer-bar-wrap">
			<footer-bar></footer-bar>
		</div>
	</div>
</div>
	
</template>
<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar';
import FooterBar from 'components/footer-bar/footer-bar';
export default {
	data() {
		return {
			options: [{
			value: '选项1',
			label: '黄金糕'
			}, {
			value: '选项2',
			label: '双皮奶'
			}, {
			value: '选项3',
			label: '蚵仔煎'
			}, {
			value: '选项4',
			label: '龙须面'
			}, {
			value: '选项5',
			label: '北京烤鸭'
			}],
			value: ''
		}
	},
	created() {
	},
	methods: {
		
	},
	components: {
		NavBar,
		FooterBar
	}
}
</script>

<style scoped lang="scss">
@import "~assets/scss/variable";
@import "~assets/scss/mixin";


.footer-bar-wrap {
	background-color: $color-background;
}

.section-wrap {
	background-color: $color-background;
	.section {
		width: 1146px;
    	margin: 0 auto;
		padding-top: 70px;
		> h2 {
			width: 100%;
			height: 100px;
			line-height: 100px;
			text-align: center;
			background-image: url('/computed_price_bg.png');
			background-size: cover;
			background-position: center center;
			background-repeat: no-repeat;
			font-size: 24px;
			color: $color-text-l;
		}
		.btn {
			display: block;
			width: 200px;
			height: 48px;
			line-height: 48px;
			text-align: center;
			border-radius: 24px;
			color: $color-text-l;
			background-color: $color-theme-d;
			box-shadow: 1px 1px 4px #FFD101;
			font-size: $font-size-large;
			margin: 0 auto;
		}
		
	}
}
</style>