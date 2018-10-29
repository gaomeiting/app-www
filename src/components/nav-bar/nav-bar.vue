<template>
	<div class="nav">
            <div class="left">
                <figure @click="goHome">
                    <img src="/logo.png" >
                </figure>
                <ul>
                    <li v-for="(nav, index) in navs" @click.stop="goNav(index)"  :class="{'active' : index === currentIndex}">{{ nav.name }}</li>
                </ul>
            </div>
            
            <ol v-if="showRightNav">
                <li @click.stop="goByBubber">配音员入驻</li>
                <li class="item" @click.stop="showAlertBox" v-if="!user">登录</li>
                <!-- <li class="item">注册</li> -->
            </ol>
    </div>
	
</template>
<script type="text/ecmascript-6">
import { mapGetters } from 'vuex';
import { initUser } from 'assets/js/user';
export default {
    props: {
        showRightNav: {
            type: Boolean,
            default: true
        },
        computedPrice: {
            type: Boolean,
            default: false
        },
        currentIndex: {
            type: Number,
            default: -1
        }
    },
    data() {
        return {
            navs: [
                {name: '服务介绍'},
                {name: '寻找声音'},
                {name: '价格估算'}
            ]
        }
    },
    created() {
        /* this.initCurrentIndex(); */
        initUser();
    },
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        showAlertBox() {
            this.$emit('showAlertBox')
        },
        
        initCurrentIndex() {
            let hash = window.location.hash;
            switch (hash) {
                case '#/home':
                    this.currentIndex = -1;
                    break;
                case '#/service':
                    this.currentIndex = 0;
                    break;
                case '#/searchVoice':
                    this.currentIndex = 1;
                    break;
                case '#/computedPrice':
                    this.currentIndex = 2;
                    break;
                
            }
        },
        goNav(index) {
            if(this.currentIndex === index) return;
            this.currentIndex = index;
            switch (index) {
                case 0:
                    window.location.href = ('/service.html');
                    break;
                case 1:
                    window.location.href = ('/searchVoice.html');
                    break;
                case 2:
                    window.location.href = ('/computedPrice.html');
                    break;
                
            }
        },
        goHome() {
            this.currentIndex = -1;
            window.location.href = ('/home.html')
        },
        goByBubber() {
            this.currentIndex = -2;
            window.location.href = '/searchVoice.html'
        }
    }
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
        cursor: pointer;
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