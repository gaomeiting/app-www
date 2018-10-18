<template>
	<div class="slide-home">
            <div class="text">
                <h2>
                    1分钟了解叮当配
                </h2>
                <ul>
                    <li>专属顾问1对1服务 ·全程沟通监理 ·提供专业配音策略建议</li>
                    <li>将配音需求进行标准化转译，全程质量监管</li>
                </ul>
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
    height: 380px;
    .text {
        color: $color-text-l;
        h2 {
            color: $color-background;
            font-size: 46px;
            white-space: nowrap;
            margin-bottom: 50px;
            color: $color-text-l;
            letter-spacing: 20px;
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
        width: 500px;
        height: 240px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}

</style>