
/*
 * @Author: Cicy 
 * @Date: 2018-10-22 17:58:51 
 * @Last Modified by: Cicy.gao
 * @Last Modified time: 2018-10-25 16:22:27
 */
<template>
<div class="current">
	<div class="content-wrap">
		<div class="select-role-plain">
			<div class="user" @click.stop="selectRole(0)">
				<h2>客户</h2>
				<p>精准、便捷的对接最合适的配音员</p>
				<div class="img">
					<img src="./bg_01.png" alt="">
				</div>
			</div>
			<div class="voice" @click.stop="selectRole(1)">
				<h2>配音员</h2>
				<p>让每个美好的声音都有价值</p>
				<div class="img">
					<img src="./bg_02.png" alt="">
				</div>
			</div>
		</div>
		
	</div>
</div>
</template>
<script type="text/ecmascript-6">

export default {
	data() {
		return {
			
		}
	},
	created() {
		this.hideRightNav()
	},
	methods: {
		selectRole(index) {
			console.log(this.$route.query.userId)
			if(!this.$route.query.userId) return;
			let userId = this.$route.query.userId
			let name = index > 0 ? 'dubber/#/ongoing' : `customer/#/regist?userId=${userId}`
			let url = `http://mp.ddpei.cn/${name}`;
			window.location.href= url;
		},
		hideRightNav() {
			this.$emit('hideRightNav')
		}
	},
	components: {
		
	}
}
</script>

<style scoped lang="scss">
@import "~assets/scss/variable";
.select-role-plain {
	display: flex;
	width: 860px;
    background: #fff;
    border: 1px solid #D8D8D8;
    border-radius: 7px 7px 7px 7px;
    box-shadow: 0 1px 4px #D3D3D3;
    box-sizing: border-box;
	padding: 20px 0;
	margin: 180px auto 0;
	> div {
		flex: 1;
		display: flex;
		flex-direction:column;
		align-items: center;
		cursor: pointer;
		&:nth-child(1) {
			border-right: 1px dashed #eaeaea;
		}
		
		h2 { 
			font-size: $font-size-large-xx;
			color: $color-text-d;
			line-height: 1.8;
		}
		p {
			line-height: 1.5;
		}
		.img {
			width: 254px;
			height: 214px;
			margin: 20px 0 30px;
			> img {
				width: 100%;
				min-height: 100%;
			}
		}
	}
}

</style>