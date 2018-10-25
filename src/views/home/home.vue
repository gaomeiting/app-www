<template>
<!-- <transition name="fade" mode="out-in"> -->
<div class="current" key="home">
	<div class="content-wrap">
		
		<div class="slide-home-wrap">
			<slide-home></slide-home>
		</div>
		<div class="section-wrap">
			<div class="section">
				<h2>解决你全部的配音需求</h2>
				<p>覆盖几乎全部题材，为您找到最合适的配音员</p>
				<ul>
					<li v-for="(icon, index) in icons" :key="index">
						<figure>
							<img :src="icon.icon">
						</figure>
						<p>{{ icon.text }}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="section-wrap">
			<div class="section">
				<h2 class="title-cal">他们这么评价叮当配</h2>
				<carousel></carousel>
				
			</div>
		</div>
		<div class="section-wrap">
			<div class="section">
				<h2 class="title-cal">已有8000+企业信任叮当配</h2>
				<ul class="logos">
					<li v-for="(logo, index) in logos" :key="index">
						<figure>
							<img :src="logo.icon">
						</figure>
					</li>
				</ul>
				<a href="http://mp.ddpei.cn/customer/" class="btn">发布需求</a>
			</div>
		</div>
		<div class="section-wrap">
			<div class="section">
				<h2 class="title-cal">联系我们</h2>
				<div class="form-wrap">
                    <div>
                        <p>
                            <label>
								<img src="/name.png">
							</label>
                            <input type="text" v-model="form.name" placeholder="姓名">
                        </p>
                        <p>
                            <label><img src="/company.png"></label>
                            <input type="text" v-model="form.company" placeholder="公司">
                        </p>
                    </div>
                    <div>
                        <p>
                            <label><img src="/email.png"></label>
                            <input type="text" v-model="form.email" placeholder="工作邮箱">
                        </p>
                        <p>
                            <label><img src="/phone.png"></label>
                            <input type="text" v-model="form.phone" placeholder="手机号码">
                        </p>
                    </div>
                    <div>
                        <textarea cols="100%" rows="6" placeholder="您的需求或您希望了解的内容" maxlength="200"  v-model="form.demand"></textarea>
                    </div>
                </div>
				<a href="javascript:;" class="btn" @click="submitForm">发送</a>
			</div>
		</div>
		<div class="section-wrap">
			<div class="section concat-wrap">
				<div class="form-wrap concat-me">
					
					<p class="concat">直接联系我们</p>
                    <div>
                        <p>
                            <label>
								<img src="/tel.png">
							</label>
                            <span>010-65401394</span>
                        </p>
                        <p>
                            <label><img src="/email_2.png"></label>
                            <span>195337943@qq.com</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label><img src="/time.png"></label>
                            <span>7x24 免费咨询服务热线</span>
                        </p>
                        <p>
                            <label><img src="/address.png"></label>
                            <span>北京市朝阳区高碑店南岸一号义安门三排45-108</span>
                        </p>
                    </div>
                </div>
			</div>
		</div>
		
	</div>
</div>
<!-- </transition>	 -->
</template>
<script type="text/ecmascript-6">
import { handlerError } from 'api/catch';
import { postData } from 'api/api';
import SlideHome from 'components/slide-home/slide-home';
import Carousel from 'components/carousel/carousel';
export default {
	inject:['refresh'],
	data() {
		return {
			icons: [
				{ icon: '/icon_1.png', text: '广告配音'},
				{ icon: '/icon_2.png', text: '有声读物'},
				{ icon: '/icon_3.png', text: '动画配音'},
				{ icon: '/icon_4.png', text: '课件配音'},
				{ icon: '/icon_5.png', text: '外语配音'},
				{ icon: '/icon_6.png', text: '更多'}
			],
			logos: [
				{icon: '/logo_1.png'},
				{icon: '/logo_2.png'},
				{icon: '/logo_3.png'},
				{icon: '/logo_4.png'},
				{icon: '/logo_5.png'},
				{icon: '/logo_6.png'},
				{icon: '/logo_7.png'},
				{icon: '/logo_8.png'},
				{icon: '/logo_9.png'},
				{icon: '/logo_10.png'},
				{icon: '/logo_11.png'},
				{icon: '/logo_12.png'},
				{icon: '/logo_13.png'},
				{icon: '/logo_14.png'},
				{icon: '/logo_15.png'},
				{icon: '/logo_16.png'},
				{icon: '/logo_17.png'},
				{icon: '/logo_18.png'},
				{icon: '/logo_19.png'},
				{icon: '/logo_20.png'},
				{icon: '/logo_21.png'},
				{icon: '/logo_22.png'},
				{icon: '/logo_23.png'},
				{icon: '/logo_24.png'},
				{icon: '/logo_25.png'}
			],
			form: {
				name: '',
				company: '',
				email: '',
				phone: '',
				demand: ''
			}
		}
	},
	created() {
		console.log(this.$route.query.showBox)
		if(this.$route.query.showBox) {
			this.$emit('showCodeBox')
		}
	},
	methods: {
		submitForm() {
			postData('/api/consult', {
					username: this.form.name,
					companyName: this.form.company,
					mobile: this.form.phone,
					email: this.form.email,
					demandContent: this.form.demand
			}).then(() => {
				console.log("成功")
			}).catch(err => {
				handlerError(err)
			})
		}
	},
	components: {
		SlideHome,
		Carousel
	}
}
</script>

<style scoped lang="scss">
@import "~assets/scss/variable";
@import "~assets/scss/mixin";



.slide-home-wrap {
	background-color: #543693;
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
		}
		h2 {
			font-size: 36px;
			margin-bottom: 21px;
			color: $color-text-l;
			margin-top: 118px;
			/* &.title-cal {
				margin-bottom: 100px;
			} */
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
				figure {
					width: 40px;
					height: 40px;
					margin-bottom: 28px;
					img {
						width: 100%;
						height: 100%;
					}
				}
				p {
					color: $color-text-l;
				}
			}
		}
	}
}
</style>