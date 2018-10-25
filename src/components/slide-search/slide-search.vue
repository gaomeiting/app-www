<template>
	<div class="slide-home">
            <div class="text">
                <h2>
                    让每个美好的声音都有价值
                </h2>
                <ul>
                    <li>成立于2000年，至今服务过上百个国内国际知名品牌！</li>
                </ul>
                <a href="http://mp.ddpei.cn/dubber/" class="btn">配音员入驻</a>
            </div>
            <figure>
                <img src="./bg.png" alt="">
            </figure>
    </div>
	
</template>
<script type="text/ecmascript-6">
export default {
    
}

</script>

<style scoped lang="scss">
@import "~assets/scss/variable";
.slide-home {
    width: 968px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 380px;
    .text {
        color: $color-text-l;
        h2 {
            color: $color-background;
            font-size: 46px;
            white-space: nowrap;
            margin-bottom: 50px;
            color: $color-text-l;
            letter-spacing: 10px;
        }
        ul {
            li {
                font-size: $font-size-medium-x;
                margin-bottom: 20px;
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
        .btn {
            display: block;
            width: 200px;
            height: 48px;
            line-height: 48px;
            text-align: center;
            color: $color-text-l;
            border: 1px solid $color-text-d;
            border-radius: 48px;
            margin-top: 50px;
        }
    }
    figure {
        width: 284px;
        height: 250px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}

</style>