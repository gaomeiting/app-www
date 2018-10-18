<template>
<div class="current" key="home">
	<div class="content-wrap">
		<div class="nav-bar-wrap">
			<nav-bar :currentIndex="0"></nav-bar>
		</div>
		<div class="slide-home-wrap">
			<slide-service></slide-service>
		</div>
		<div class="section-wrap">
			<div class="section icons-wrap">
				<div class="switches-wrap">
					<switches :switches="switches"></switches>
				</div>
				<!-- <transition name="fade" mode="out-in"> -->
				<ul>
					<li>
						<div class="info">
							<h3>发布需求</h3>
							<p>依据内容原型，进行需求分析，定义用户，针对分析确定 <br>
								产品架构，表现形式等。</p>
						</div>
						<figure>
							<img src="./pic_1.png" alt="">
						</figure>
					</li>
					<li>
						<figure>
							<img src="./pic_2.png" alt="">
						</figure>
						<div class="info">
							<h3>配音员选择</h3>
							<p>智能匹配合适的配音员，多种录制风格尝试，剪辑音乐音 <br>
								效精品制作。</p>
						</div>
					</li>
					<li>
						<div class="info">
							<h3>严格质量把关</h3>
							<p>95%正确率远高于电台节目主持人标准</p>
						</div>
						<figure>
							<img src="./pic_3.png" alt="">
						</figure>
					</li>
					<li>
						<figure>
							<img src="./pic_4.png" alt="">
						</figure>
						<div class="info">
							<h3>版权分发</h3>
							<p>多家网络电台深度合作，联合主推，增加品牌曝光度</p>
						</div>
					</li>
					
				</ul>
				<!-- </transition> -->
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
import SlideService from 'components/slide-service/slide-service';
import Switches from 'components/switches/switches';
export default {
	data() {
		return {
			navFlag: true,
			currentIndex: 0,
			switches: [
				{ name: '流程介绍' },
				{ name: '关于我们' }
			]
		}
	},
	created() {
	},
	methods: {
		selectItem(index) {
			this.currentIndex = index;
		}
	},
	components: {
		NavBar,
		SlideService,
		FooterBar,
		Switches
	}
}
</script>

<style scoped lang="scss">
@import "~assets/scss/variable";
@import "~assets/scss/mixin";
.switches-wrap {
	padding: 50px 0;
}
.icons-wrap {
     ul {
			 text-align: left;
			 li {
				 display: flex;
				 justify-content: space-between;
				 margin-bottom: 100px;
				 &:nth-child(2n) {
					figure {
						margin-right: 70px;
					}
				 }
				 &:first-child {
					 figure {
						 width: 322px;
						 height: 280px;
						}
				 }
				 &:nth-child(2) {
					 figure {
						 width: 450px;
						 height: 234px;
						}
				 }
				 &:nth-child(3) {
					 figure {
						 width: 430px;
						 height: 286px;
						}
				 }
				 &:nth-child(4) {
					 figure {
						 width: 430px;
						 height: 282px;
						}
				 }
				 img {
						width: 100%;
						height: 100%;
					}
				 .info {
					 flex: 1;
				 }
				 h3 {
					 font-size: 28px;
					 color: $color-text-l;
					 padding-bottom: 16px;
					 margin-top: 56px;
				 }
				 p {
					 line-height: 1.5;
				 }
			 }
		 } 
}
.nav-bar-wrap {
	
}
.footer-bar-wrap {
	background-color: $color-background;
}
.slide-home-wrap {
	background-color: #FFD343;
}
.section-wrap {
	
	.section {
		width: 1146px;
    margin: 0 auto;
		text-align: center;
		&.icons-wrap {
			width: 920px;
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