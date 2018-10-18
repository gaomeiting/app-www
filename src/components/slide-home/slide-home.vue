<template>
	<div class="slide-home">
            <div class="text">
                <h2>
                    最靠谱的互联网配音平台
                </h2>
                <ul>
                    <li>近千名配音员入驻</li>
                    <li>专业的录音棚和后期剪辑审核团队</li>
                    <li>24小时客服热线</li>
                    <li>配音员免费给您试音</li>
                </ul>
                <a href="javascript:;" class="btn">发布需求</a>
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
    width: 1146px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #543693;
    height: 776px;
    .text {
        color: $color-background;
        h2 {
            color: $color-background;
            font-size: 48px;
            white-space: nowrap;
            margin-bottom: 50px;
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
            color: $color-background;
            border: 1px solid $color-background-d;
            border-radius: 48px;
            margin-top: 50px;
        }
    }
    figure {
        width: 739px;
        height: 472px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}

</style>