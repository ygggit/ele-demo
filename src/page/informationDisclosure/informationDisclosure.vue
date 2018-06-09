<template lang="html">
	<div id="app">
		<v-header></v-header>
		<div class="wufu-container">
			<router-view></router-view>
		</div>
		<v-footer></v-footer>
	</div>
</template>

<script>
import VHeader from '../../components/wufuheader/wufuheader'
import VFooter from '../../components/wufuFooter/wufuFooter'
export default {
	data(){
		return{

		}
	},
	components: {
      VHeader,
      VFooter
    }
}

</script>

<style lang="less">
.wufu-container{
	padding-top:70px;
}
</style>
