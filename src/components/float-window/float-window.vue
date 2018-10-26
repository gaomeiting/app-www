<template>
    <section class="float-window" ref="box">
        <ul>
            <li @click.stop="goTask">
                <i class="iconfont icon-shandian"></i>
                <p>快 速 <br>配 音</p>
            </li>
            <li>
                <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODE5MjQ4NF80NDM2MDhfNDAwOTY4Njg2MF8yXw" class="item_a" target="_blank">
                    <i class="iconfont icon-kefu"></i>
                    <p>在 线 <br>客 服</p>
                </a>
            </li>
            <li>
                
                <a href="javascript:;" @click.stop="goComputedPrice">
                <i class="iconfont icon-jisuanqi"></i>
                <p>价 格 <br>计 算</p>
                </a>
            </li>
            <transition name="fade" mode="out-in">
            <li v-if="flag" @click.stop.prevent="scrollTop" :key="0">
                <a href="javascript:;" @click.stop="goComputedPrice">
                <i class="iconfont icon-huidaodingbu"></i>
                <p>回 到 <br>顶 部</p>
                </a>
            </li>
            <li v-else style="opacity: 0" :key="1">
                <p>回 到 <br>顶 部</p>
            </li>
            </transition>
        </ul>
    </section>
</template>
<script type="text/ecmascript-6">
import { BackTop } from 'ant-design-vue';
import { BASE_URL } from 'api/config';
    export default {
        props: {
            flag : {
                type: Boolean,
                default: false
            }
        },
        methods: {
            goComputedPrice() {
                this.$router.push('/computedPrice')
               /* this.$emit('goComputedPrice', 2); */
            },
            goTask() {
                window.location.href=`${BASE_URL}/dubber/`
            },
            scrollTop() {
                document.documentElement.scrollTop = 0;
            }
        }
        
    }
</script>
<style lang="scss">

.float-window li  { 
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #ff9900;
    box-sizing: border-box;
    border-radius: 66px;
    margin-bottom: 4px;
    background: rgb(255, 255, 255);
    overflow: hidden;
    background-color: #dddddd;
}
.float-window li a { color: #f90; }
.float-window li p { opacity: 0; }
.float-window li:hover p {
    line-height: 1.2;
    font-size: 14px;
    width: 60px;
    height: 60px;
    background: #ff9900;
    color: #fff;
    box-sizing: border-box;
    padding-top: 14px;
    transition: 0.3s ease-in;
    opacity: 1;
}
.float-window li:hover i {
    display: none;
}
.float-window li:hover { 
    cursor: pointer;
}

.float-window li i {
    display: block;
     font-size: 32px;
     color: #fff;
}
.float-window li:last-child {
    margin-bottom: 0;
}
.float-window li a.item_a {
    color: #dddddd;
}
</style>
