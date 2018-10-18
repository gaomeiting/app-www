<template>
	<div class="nav">
            <div class="left">
                <figure>
                    <img src="/logo.png" >
                </figure>
                <ul>
                    <li class="active">服务介绍</li>
                    <li>寻找声音</li>
                    <li>价格估算</li>
                </ul>
            </div>
            
            <ol>
                <li>配音员入驻</li>
                <li class="item">登录</li>
                <li class="item">注册</li>
            </ol>
    </div>
	
</template>
<script type="text/ecmascript-6">
export default {
    
}
</script>

<style scoped lang="scss">
@import "~assets/scss/variable";
.nav {
    width: 1146px;
    height: 80px;
    margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: $font-size-medium-x;
	color: $color-text-l;
	.left {
        height: 100%;
		display: flex;
		align-items: center;
	}
	figure {
		width: 172px;
		height: 40px;
		img {
			width: 100%;
			height: 100%;
		}
	}
	ul {
        display: flex;
		li {
            width: 110px;
            line-height: 80px;
            text-align: center;
            cursor: pointer;
            position: relative;
            &.active:after {
                display: block;
                content: '';
                width: 33%;
                border-bottom: 3px solid $color-theme-d;
                position: absolute;
                left: 34%;
                bottom: 0;
            }
		}
	}
	ol {
		display: flex;
        list-style: none;
        font-size: $font-size-medium;
        display: flex;
        align-items: center;
		li {
            cursor: pointer;
            &:first-of-type {
                width: 92px;
                height: 34px;
                line-height: 34px;
                text-align: center;
                background-color: $color-theme-d;
                border-radius: 2px;
                margin-right: 30px;
            }
            &:last-child {
                border-left: 1px solid $color-background;
            }
            &.item {
                padding: 0 20px;
            }
		}
	}
}


</style>