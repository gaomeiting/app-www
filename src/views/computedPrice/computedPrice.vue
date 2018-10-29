/*
 * @Author: Cicy 
 * @Date: 2018-10-22 17:34:25 
 * @Last Modified by: Cicy.gao
 * @Last Modified time: 2018-10-29 16:05:04
 */
<template>
<div  id="app" class="app">
  <div class="nav-bar-wrap">
			<nav-bar :showRightNav="showRightNav" @showAlertBox="showAlertBox" :computedPrice="computedPrice" :currentIndex="2"></nav-bar>
	</div>
  <transition name="fadePage" mode="out-in">
    <computed-view @hideRightNav="hideRightNav" @showCodeBox="showAlertBox" @goComputedPrice="goComputedPrice"></computed-view>
  </transition>
  
  <div class="footer-bar-wrap">
    <footer-bar></footer-bar>
  </div>
  <div class="float-window-wrap">
		<float-window :flag="windowFlag"></float-window>
	</div>
  <alert-box ref="alertBox">
    <div id="login_container"></div>
  </alert-box>
</div>
</template>
<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar';
import FooterBar from 'components/footer-bar/footer-bar';
import FloatWindow from 'components/float-window/float-window';
import ComputedView from 'views/computedPrice/computedPrice-view';
import AlertBox from 'components/alert/alert';
import { getQueryString } from 'assets/js/until';
import { BASE_URL } from 'api/config';
  export default {
    data() {
      return {
        windowFlag: false,
        showRightNav: true,
        computedPrice: false
      }
    },
    provide(){   
       return {  
          refresh: this.refresh
        }
    },
    created() {
      let state = getQueryString('redirect');
      this.$nextTick(() => {
        let obj = new WxLogin ({
          id:"login_container",
          appid: "wx488c5ae325198186",
          scope: "snsapi_login",
          redirect_uri: encodeURI(`${BASE_URL}/api/user/wechat/auth`) ,
          state,
          style: "black",      
          href: ""
        });
      })
      
    },
    mounted () {
     this._handlerScroll();
    },
    
    methods: {
      goComputedPrice() {
        this.computedPrice = true;
      },
      showAlertBox() {
        this.$refs.alertBox.show()
      },
      hideRightNav() {
        this.showRightNav = false;
      },
      _handlerScroll() {
          window.addEventListener('scroll', () => {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          if(scrollTop > 600) {
            this.windowFlag = true;
          }
          else {
            this.windowFlag = false;
          }
        })
      }
    },
    components: {
      NavBar,
      FooterBar,
      FloatWindow,
	  AlertBox,
	  ComputedView
    }
  }
</script>

<style lang="scss" scoped>

.app {
  min-height: 100vh;
  position: relative;
}
.float-window-wrap {
	position: fixed;
	right: 30px;
	bottom: 40px;
}
</style>
