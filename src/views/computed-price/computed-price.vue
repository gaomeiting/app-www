<template>
<div class="current" key="computedPrice">
	<div class="content-wrap">
		<div class="nav-bar-wrap">
			<nav-bar :currentIndex="2"></nav-bar>
		</div>
		<div class="section-wrap">
			<div class="section">
				<h2>
					价格估算
				</h2>
				<div class="form-wrap">
					<!--从这里开始-->
					<div class="form_content">
						<div class="language">
							<h3>语种</h3>
							<p class="lang">
								<span>普通话</span>
								<span>外语/小语种</span>
								<span>方言/民族语</span>
							</p>
						</div>
						<!--级别-->
						<div class="rank">
							<h3>级别</h3>
							<a-select defaultValue="优质主播"
									  size="large"
									style="width: 100%">
								<a-select-option v-for="i in levels" :key="i.label">
									{{i.label}}
								</a-select-option>
							</a-select>
							<p class="rank_description">1系最高，7系最低，另有V系为特约老师，需预约</p>
						</div>
						<!--稿件类型-->
						<div class="rank">
							<h3>稿件类型</h3>
							<a-select defaultValue="普通话"
									  size="large"
									  style="width: 100%">
								<a-select-option v-for="i in options" :key="i.label">
									{{i.label}}
								</a-select-option>
							</a-select>
						</div>
						<!--字数-->
						<div class="rank">
							<h3>字数</h3>
							<a-input defaultValue="100"
									  size="large"
									  style="width: 100%;border-radius: 4px"/>
							<p class="rank_description">字数统计用word或者wps的字数统计功能</p>
						</div>
						<a href="javascript:;" class="btn">计算</a>
						<div class="form_number">
							<div class="header_number">
								<div class="number">
									<p class="num_title">金额(元)</p>
									<p class="num_num">1234</p>
								</div>
								<div class="line"></div>
								<div class="number">
									<p class="num_title">时长</p>
									<p class="num_num">12:34</p>
								</div>
							</div>
							<p class="num_description">
								此处费用仅供参考，另外大订单的价格可以再议，详情请
								<span class="num_to_click">咨询客服</span>
							</p>
						</div>
					</div>
				</div>

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
            value:'',
			options: [{
			value: '普通话',
			label: '普通话'
			}, {
			value: '颁奖类',
			label: '颁奖类'
			}, {
			value: '品牌类',
			label: '品牌类'
			}, {
			value: '电购类',
			label: '电购类'
			}],
			levels: [{
			value: '优质主播',
			label: '优质主播'
			}, {
			value: '知名主播',
			label: '知名主播'
			}, {
			value: '顶级主播',
			label: '顶级主播'
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
			margin-bottom: 0px;
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
		.form-wrap{
			background: #ffffff;
			height: 1008px;
			.form_content{
				padding: 0 246px;
				.language{
					padding-top: 60px;
					>h3{
						margin-bottom: 40px;
					}
					.lang{

						>span{
							box-sizing: border-box;
							margin-right: 20px;
							padding: 17px 20px;
							background: #FFD100;
							border-radius: 2px;
							color: #333333;
						}
					}
				}
				.rank{
					padding-top: 40px;
					>h3{
						margin-bottom: 20px;
					}
					.rank_description{
						font-size: 12px;
						color: #aaaaaa;
						margin-top: 10px;
						margin-bottom: 0px;
					}
				}
				.btn{
					margin-top: 40px;
				}
				.form_number{
					height: 200px;
					background: #FCFCFC;
					border: 1px solid #E5E5E5;
					border-radius: 4px;
					margin-top: 80px;
					.header_number{
						margin-top: 43px;
						margin-bottom: 48px;
						height: 65px;
						display: flex;
						justify-content: space-around;
						.number{
							text-align: center;
							width: 49%;
							.num_title{
								color: #4A4A4A;
							}
							.num_num{
								font-size: 30px;
								line-height: 30px;
								margin-bottom: 0px;
							}

						}
						.line{
							width: 1px;
							background: #E5E5E5;
						}
					}
					.num_description{
						text-align: center;
						.num_to_click{
							color: #E5A803;
							font-size: 14px;
						}
					}
				}
			}

		}
		
	}
}
</style>