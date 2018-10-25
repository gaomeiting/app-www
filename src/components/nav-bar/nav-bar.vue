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
import { mapGetters, mapMutations } from 'vuex';
export default {
    props: {
        showRightNav: {
            type: Boolean,
            default: true
        },
        computedPrice: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            navs: [
                {name: '服务介绍'},
                {name: '寻找声音'},
                {name: '价格估算'}
            ],
            currentIndex: -1
        }
    },
    created() {
        this.initCurrentIndex();
        this.handlerUser()
    },
    computed: {
      ...mapGetters(['user'])
    },
    watch: {
        computedPrice(newVal, oldVal) {
            if(newVal) {
                goNav(2)
            }
        }
    },
    methods: {
        showAlertBox() {
            this.$emit('showAlertBox')
        },
        handlerUser() {
            if(!this.user) {
                //未登录，没有扫码 -1
                this.setStatus(-1);
                return;
            }
            if(this.user && this.user.roles.length === 1 && this.user.roles.includes('anonymous')) {
                //游客身份 0
                this.setStatus(0);
                return;
            }
            if(this.user && (this.user.roles.includes('customer') ||this.user.roles.includes('customer-org') || this.user.roles.includes('customer-person'))) {
                //需方 1
                this.setStatus(1);
                return;
            }
            if(this.user && (this.user.roles.includes('dubber-person') || this.user.roles.includes('dubber-team'))) {
                //配音员 2
                this.setStatus(2);
                return;
            }
            
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
                    this.$router.push('/service');
                    break;
                case 1:
                    this.$router.push('/searchVoice');
                    break;
                case 2:
                    this.$router.push('/computedPrice');
                    break;
                
            }
        },
        goHome() {
            this.currentIndex = -1;
            this.$router.push('/')
        },
        goByBubber() {
            this.currentIndex = -2;
            this.$router.push('/join')
        },
        ...mapMutations({
            'setStatus': 'SET_STATUS'
        })
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