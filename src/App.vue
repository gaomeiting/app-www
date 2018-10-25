/*
 * @Author: Cicy 
 * @Date: 2018-10-22 17:34:25 
 * @Last Modified by: Cicy.gao
 * @Last Modified time: 2018-10-25 14:46:33
 */
<template>
<div  id="app" class="app">
  <div class="nav-bar-wrap">
			<nav-bar :showRightNav="showRightNav" @showAlertBox="showAlertBox"></nav-bar>
	</div>
  <transition name="fadePage" mode="out-in">
    <router-view @hideRightNav="hideRightNav" @showCodeBox="showAlertBox"></router-view>
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
import AlertBox from 'components/alert/alert';

  export default {
    data() {
      return {
        windowFlag: false,
        showRightNav: true
      }
    },
    provide(){   
       return {  
          refresh: this.refresh
        }
    },
    created() {
      let state = this.$route.query.redirect || '/';
      this.$nextTick(() => {
        let obj = new WxLogin ({
          id:"login_container",
          appid: "wx488c5ae325198186",
          scope: "snsapi_login",
          redirect_uri: encodeURI("http://mp.ddpei.cn/api/user/wechat/auth") ,
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
      AlertBox
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
