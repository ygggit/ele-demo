<template lang="html">
<div class="header" ref="conditionOption" :class="filterFixed ? 'headerFixed':'' ">
	<div class="header-wrapper">
		<div class="header-container float-clearfixed">
			<a href="#" class="logo">
				<!-- <img src="../../../static/wufuheader/logo.png" alt=""> -->
				<!-- <i ></i> -->
			</a>
			<!-- 导航 -->
			<div class="nav">
				<ul>
					<li v-for="(val,index) in list" :key="index" :class="{'active':index===activeIndex}" @mouseover="showMenu(index)" @mouseleave="hideMenu()" @click="changeMenu(index)">
						<a href="#">{{val.name}}</a>
						<div class="sub-menu" :class="{'active':index===menuActiveIndex}">
							<div class="sub-menu-box">
								<ul>
									<li v-for="(menuSubVal,selfIndex) in val.menuSub" :key="selfIndex">
										<a href="/informationDisclosure.html">{{menuSubVal.menuName}}</a>
									</li>
								</ul>

							</div>
						</div>
					</li>
				</ul>
				<div class="login-box">
					<a href="#" class="login">登录</a>
					<a href="#">注册</a>
				</div>
			</div>
		</div>
	</div>

</div>
</template>

<script>
export default {
	data(){
		return{
			"activeIndex":0,
			"liIndex":'',
			"menuActiveIndex":'',
			"filterFixed":'',
			"list":[
				{
					"name":"首页",
					"menuSub":[
						{
							"menuName":"五福贷1",
							"url":""
						},
						{
							"menuName":"五福贷1",
							"url":""
						},
						{
							"menuName":"五福贷1",
							"url":""
						},
						{
							"menuName":"五福贷1",
							"url":""
						},
					]
				},
				{
					"name":"我要出借",
					"menuSub":[
						{
							"menuName":"五福贷2",
							"url":""
						},
						{
							"menuName":"五福贷2",
							"url":""
						}
					]
				},
				{
					"name":"我要借款",
					"menuSub":[
						{
							"menuName":"五福贷3",
							"url":""
						},
						{
							"menuName":"五福贷3",
							"url":""
						}
					]
				},
				{
					"name":"信息披露",
					"menuSub":[
						{
							"menuName":"信息披露",
							"url":"/informationDisclosure.html"
						},
						{
							"menuName":"银行存管",
							"url":"/informationDisclosure.html"
						},
						{
							"menuName":"运营报告",
							"url":"/informationDisclosure.html"
						},
						{
							"menuName":"安全保障",
							"url":"/informationDisclosure.html"
						},
					]
				},
				{
					"name":"五福活动",
					"menuSub":[
						{
							"menuName":"五福贷5",
							"url":""
						},
						{
							"menuName":"五福贷5",
							"url":""
						},
						{
							"menuName":"五福贷5",
							"url":""
						},
						{
							"menuName":"五福贷5",
							"url":""
						},
					]
				},
				{
					"name":"我的福袋",
					"menuSub":[

					]
				},
			]
		}
	},
	mounted(){
        window.addEventListener('scroll',this.handleScroll);
    },
	methods:{
		changeMenu(index){
			this.activeIndex = index;
		},
		showMenu(index){
			this.menuActiveIndex = index;
		},
		hideMenu(){
			this.menuActiveIndex = '';
		},
		handleScroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let offsetTop = this.$refs.conditionOption.offsetTop
            // var offsetTop = document.querySelector('.condition-option').offsetTop
            // console.log('scrollTop',scrollTop)
            // console.log('offsetTop',offsetTop)
            if(scrollTop > 480){
				console.log(123)
                this.filterFixed = true;
            }else{
				console.log(456)
                this.filterFixed = false;
            }
        },
	},
	destroyed () {
        // console.log('离开')
      window.removeEventListener('scroll', this.handleScroll)
    },
}
</script>

<style lang="less">
@import 'wufuheader.less';
</style>
