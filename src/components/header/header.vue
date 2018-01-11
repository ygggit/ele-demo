<template lang="html">
  <div class="header">
     <div class="nav-top">
         <p>注册成为双立人会员并完善资料或得您的首单优惠券</p>
     </div>
     <div class="header-container clearfixed">
         <!-- 左侧侧边栏按钮内容 -->
         <div class="header-left">
             <a href="#" @click="toggle()"><i class="icon icon-menu"></i></a>
             <!-- 侧边栏 -->
             <div class="navbar-menu">
              <mu-drawer left :open="open" @close="toggle()" class="clearfixed">
                 <mu-appbar title="Title">
                  <mu-icon-button icon=":icon icon-cancel" slot="left"  @click="open=false"/>
                  <mu-flat-button label="" slot="center"/>
                    <a href="#"><img src="../../assets/logo.png"></a>
                  </mu-flat-button>
                  <mu-icon-button icon=":icon icon-my-account" slot="right"/>
                </mu-appbar>
                <!-- <mu-list class="mu-list-left">
                  <mu-list-item  v-for="(val,index) in list" :key="index">
                          <p class="chineseName">{{val.ChineseName}}</p>
                          <p class="englishName">{{val.EnglishName}}</p>
                          <i class="icon icon-arrow-left"></i>
                  </mu-list-item>
                </mu-list>
                <mu-list class="mu-list-right">
                  <mu-list-item  v-for="(val,index) in list" :key="index">
                      <a href="">
                          <img src="../../../static/header/menu_knife.png" alt="">
                          <p>
                              <span>刀具</span><br>
                              <small>Knifes</small>
                          </p>
                          <i class="icon icon-open"></i>
                      </a>
                  </mu-list-item>
                </mu-list> -->
                <!-- <mu-paper class="demo-menu">
                 <mu-menu>
                   <mu-menu-item title="Single"/>
                   <mu-menu-item title="1.15"/>
                   <mu-menu-item title="Double"/>
                   <mu-menu-item title="Custom: 1.2" rightIcon="keyboard_arrow_right">
                     <mu-menu-item title="Show"/>
                     <mu-menu-item title="Grid lines" />
                     <mu-menu-item title="Page breaks"/>
                     <mu-menu-item title="Rules"/>
                   </mu-menu-item>
                 </mu-menu>
               </mu-paper> -->

               <sideBar></sideBar>
              </mu-drawer>
            </div>
         </div>
         <!-- logo -->
         <div class="header-logo">
             <a href="#"><img src="../../assets/logo.png"></a>
         </div>
         <!-- 搜索 -->
         <div class="header-right">
             <ul>
                 <li>
                     <a href="#"><i class="icon icon-search"></i></a>
                 </li>
                 <li>
                     <a href="#">
                         <i class="icon icon-shopping"></i>
                         <em>2</em>
                     </a>
                 </li>
             </ul>
         </div>
     </div>
  </div>
</template>

<script>
import sideBar from "../sideBar/sideBar.vue"
export default {
    data(){
        return{
             open: false,
             list:[
                 {
                     ChineseName:'双立人',
                     EnglishName:'Zwilling',
                     path:'detail1'
                 },
                 {
                     ChineseName:'双立人',
                     EnglishName:'Zwilling',
                     path:'detail2'
                 },
                 {
                     ChineseName:'双立人',
                     EnglishName:'Zwilling',
                     path:'detail3'
                 },
                 {
                     ChineseName:'双立人',
                     EnglishName:'Zwilling',
                     path:'detail4'
                 },
                 {
                     ChineseName:'双立人',
                     EnglishName:'Zwilling',
                     path:'detail5'
                 },
                 {
                     ChineseName:'双立人',
                     EnglishName:'Zwilling',
                     path:'detail6'
                 },
                 {
                     ChineseName:'双立人',
                     EnglishName:'Zwilling',
                     path:'detail7'
                 }, {
                      ChineseName:'双立人',
                      EnglishName:'Zwilling',
                    path:'detail8'
                  }, {
                       ChineseName:'双立人',
                       EnglishName:'Zwilling',
                       path:'detail9'
                   }
             ]
        }
    },
    methods:{
        toggle () {
          this.open = !this.open
      }
  },
  components:{
      sideBar
  }
}
</script>

<style lang="less">
@import 'header.less';
.demo-badge-container{
  // padding-top: 24px;
}
.demo-icon-badge {
  padding: 12px;
  margin-right: 16px;
}
</style>
