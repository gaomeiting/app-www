<template>
<div  id="app" class="app">
  <div class="nav-bar-wrap">
			<nav-bar></nav-bar>
	</div>
  <transition name="fadePage" mode="out-in">
    <router-view></router-view>
  </transition>
  <div class="footer-bar-wrap">
    <footer-bar></footer-bar>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar';
import FooterBar from 'components/footer-bar/footer-bar';
  export default {
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
      
    },
    components: {
      NavBar,
		  FooterBar
    }
  }
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  position: relative;
}
</style>
