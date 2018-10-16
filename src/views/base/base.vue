<template>
	<transition name="fade" mode="out-in">
		<div class="current">
			<div class="content-wrap">
				我是home页面
			</div>
		</div>
	</transition>
	
</template>
<script type="text/ecmascript-6">
import { handlerError } from 'assets/js/mixins'
import { getData } from 'api/api'
export default {
	mixins: [ handlerError ],
	data() {
		return {
			error: ''
		}
	},
	created() {
		this.getPlayer()
	},
	methods: {
		getPlayer() {
			getData(`/api/activity/107/detail`).then(res=>{
				
			}).catch(err => {
				this._handlerError(err)
			})
		}
	},
	components: {
	}
}
</script>

<style scoped lang="scss">
@import "~assets/scss/variable";
@import "~assets/scss/mixin";



</style>