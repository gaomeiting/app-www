<template>
<div class="current">
	<div class="content-wrap">
		
		<div class="slide-home-wrap">
			<slide-service></slide-service>
		</div>
		<div class="section-wrap">
			<div class="section icons-wrap">
				<div class="switches-wrap">
					<switches :switches="switches" :currentIndex="contentIndex" @switchItem="selectItem"></switches>
				</div>
				<transition name="fadePage" mode="out-in">
				<ul :key="0" v-if="contentIndex === 0">
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
				<ul :key="1" v-if="contentIndex === 1">
					<li>
						<div class="info">
							<h3>互联网化的超级配音公司</h3>
							<p>叮当配不断倾听和满足客户需求，用专业引导并超越用户需求，用声音为客户创造最大价值。通过不断发现好声音，创造好产品，推动有声行业的价值提升和健康发展，与合作伙伴共同创造好产品，提升产品价值。</p>
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
							<h3>拥有836+配音员和配音团队的超级组织</h3>
							<p>叮当配长期合作的配音员和配音工作室等超过了800多人，在河北、辽宁、浙江、山西等地建立了分公司或合伙人，与多所高校建立了声咖社团，通过互联网将分散的配音团队组合起来，集录制、创作、发行、经纪于一体，已经为上万家客户提供过专业服务。</p>
						</div>
					</li>
					<li>
						<div class="info">
							<h3>让人们听见更美好的声音</h3>
							<p>充分发掘声音梦想者的声音价值，让人们听到这些美好的声音，提升声音梦想者的价值和社会地位。

使美好的声音和有声产业相关工作者，更快捷更容易的把产品输出给每个人，让每个美好的声音都有价值。</p>
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
							<h3>让声音为内容赋能</h3>
							<p>声音的价值是体现在内容之上的。叮当配依赖多年的行业经验以及对声音的热爱，对客户的需求不断研究探索，找出最适合的声音表达方式来为内容赋能。</p>
						</div>
					</li>
					
				</ul>
				</transition>
			</div>
		</div>
		
	</div>
</div>
</template>
<script type="text/ecmascript-6">
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
			],
			contentIndex: 0
		}
	},
	created() {
	},
	methods: {
		selectItem(index) {
			this.contentIndex = index;
		}
	},
	components: {
		SlideService,
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