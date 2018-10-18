<template>
	<div class="footer-bar">
            <div class="footer">
                <ol>
                    <li>
                        <figure>
                            <img src="/logo.png">
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="/tel.png">
                        </figure>
                        <p>010-65401394</p>
                    </li>
                    <li>
                        <figure>
                            <img src="/email_2.png">
                        </figure>
                        <p>195337943@qq.com</p>
                    </li>
                </ol>
                <ul>
                    <li>
                        <h3>客户</h3>
                    </li>
                    <li>
                        <p>发布需求</p>
                    </li>
                    <li>
                        <p>客户评价</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h3>配音员</h3>
                    </li>
                    <li>
                        <p>配音员入驻</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h3>友情链接</h3>
                    </li>
                    <li>
                        <p>喜马拉雅FM</p>
                    </li>
                    <li>
                        <p>更多</p>
                    </li>
                </ul>
            </div>
            
            <p>版权所有 北京诺听科技有限公司 Copyright © 2015 All Rights Reserved. 京ICP备1606</p>
    </div>
	
</template>
<script type="text/ecmascript-6">
export default {
    
}
</script>

<style scoped lang="scss">
@import "~assets/scss/variable";
.footer-bar {
    width: 1146px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
	align-items: center;
	font-size: $font-size-medium-x;
    color: $color-text-d;
    padding: 40px 0;
    > p {
        font-size: $font-size-small;
        color: $color-text;
    }
    .footer {
        width: 100%;
        display: flex;
        
    }
    ol {
        flex: 3;
        list-style: none;
        li {
            font-size: $font-size-small;
            display: flex;
            margin-bottom: 20px;
            &:first-child {
                > figure {
                    width: 214px;
                    height: 50px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            
            > figure {
                width: 14px;
                height: 14px;
                margin-right: 0.8em;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            > p {

            }
        }
    }
    ul {
        flex: 1;
        font-size: $font-size-small;
        li {
            margin-bottom: 20px;
            &:first-child {
                font-size: $font-size-medium-x;
            }
        }
        h2 {
            font-size: $font-size-medium-x;
            color: $color-text-l;
        }
    }
	
}


</style>