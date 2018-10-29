<template>
<div class="current" key="searchvoice">
	<div class="content-wrap">
		<div class="slide-home-wrap">
			<slide-search></slide-search>
		</div>
		<div class="section-wrap">
			<div class="section">
				<h2>在叮当配做配音员，你将会获得</h2>
				<!-- <p>覆盖几乎全部题材，为您找到最合适的配音员</p> -->
				<ul>
					<li v-for="(icon, index) in icons" :key="index">
						<figure>
							<img :src="icon.icon">
						</figure>
						<p v-html="icon.text"></p>
					</li>
				</ul>
			</div>
		</div>
		<div class="section-wrap">
			<div class="section">
				<h2 class="title">按下这个按钮，重启一下生活</h2>
				<!-- <p>覆盖几乎全部题材，为您找到最合适的配音员</p> -->
				<a href="/dubber/" class="btn btm">配音员入驻</a>
			</div>
		</div>
		
	</div>
</div>
	
</template>
<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar';
import FooterBar from 'components/footer-bar/footer-bar';
import SlideSearch from 'components/slide-search/slide-search';
import Carousel from 'components/carousel/carousel';
export default {
	data() {
		return {
			icons: [
				{ icon: '/search_1.png', text: '让你的声音被更多的人听见 <br> 已有超过2000家客户选择了叮当配'},
				{ icon: '/search_2.png', text: '严格的声音质量把关，配音晋升体系  <br> 专业的声音经济，让你的声音价值最大化'},
				{ icon: '/search_3.png', text: '项目准时结款率100% <br> 你不敢想的，我们真的做到了'}
			],
			navs: [
				{name: '服务介绍1'},
				{name: '寻找声音2'},
				{name: '价格估算3'}
			]
		}
	},
	created() {
	},
	
	methods: {
		
	},
	components: {
		NavBar,
		SlideSearch,
		Carousel,
		FooterBar,
		/* FloatWindow */
	}
}
</script>

<style scoped lang="scss">
@import "~assets/scss/variable";
@import "~assets/scss/mixin";

.nav-bar-wrap {
	
}
.footer-bar-wrap {
	background-color: $color-background;
}
.slide-home-wrap {
	background-color: #FCE17D;
}
.section-wrap {
	
	.section {
		width: 1146px;
    	margin: 0 auto;
		text-align: center;
		&.concat-wrap {
			width: 1030px;
			height: 262px;
			margin: 0 auto 100px;
			background-image: url('/concat.png');
			background-size: cover;
			background-position: center center;
			background-repeat: no-repeat;
			box-shadow: 2px 2px 4px $color-background, -2px -2px 4px $color-background;
			.concat {
				padding-top: 64px;
				padding-left: 1em;
				padding-bottom: 28px;
				text-align: left;
				font-size: 20px;
				color: $color-text-l;
			}
			.concat-me {
				padding: 0 110px;
				p {
					border: none;
					height: 20px;
					margin-bottom: 28px;
					label {
						margin-right: 1em;
					}
				}
				div:last-child {
					border: none;
					box-shadow: none;
					border-radius: 0;
					padding: 0;
				}
			}
			
		}
		.form-wrap {
			width: 1000px;
			margin: 64px auto 50px;
			> div {
				display: flex;
				justify-content: space-between;
				&:last-child {
					border: 1px solid $color-background;
					border-radius: 4px;
					padding: 1em;
				}
				> p {
					flex: 0 0 490px;
					display: flex;
					height: 48px;
					align-items: center;
					border: 1px solid $color-background;
					border-radius: 4px;
					margin-bottom: 20px;
					padding-left: 1em;
					label {
						display: block;
						width: 16px;
						height: 16px;
					}
					input {
						flex: 1;
					}
				}
			}
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
			&.btm {
				margin-bottom: 120px;
			}
		}
		h2 {
			font-size: 36px;
			margin-bottom: 21px;
			color: $color-text-l;
			margin-top: 118px;
			&.title {
				margin-bottom: 56px;
			}
		}
		p {
			margin-bottom: 56px;
		}
		ul {
			display: flex;
			flex-wrap: wrap;
			padding-top: 64px;
			&.logos {
				li {
					flex: 0 0 120px;
					margin-right: 120px;
					&:nth-child(5n) {
						margin-right: 0;
					}
					figure {
						width: 120px;
						height: 60px;
						margin-bottom: 60px;
					}
				}
			}
			li {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				cursor: pointer;
				&:nth-child(2) {
					figure {
						width: 90px;
						height: 72px;
					}
				}
				figure {
					width: 68px;
					height: 68px;
					margin-bottom: 28px;
					img {
						width: 100%;
						height: 100%;
					}
				}
				p {
					color: $color-text-l;
					line-height: 2;
					color: $color-text-d;
				}
			}
		}
	}
}
</style>