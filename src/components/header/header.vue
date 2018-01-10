<template lang="html">
  <div class="header">
     <div class="nav-top">
         <p>注册成为双立人会员并完善资料或得您的首单优惠券</p>
     </div>
     <div class="header-container clearfixed">
         <div class="header-left">
             <a href="#" @click="toggle()"><i class="icon icon-menu"></i></a>
             <div class="navbar-menu">
              <!-- <mu-raised-button label="toggle drawer" @click="toggle()"/> -->
              <mu-drawer left :open="open" @close="toggle()" class="clearfixed">
                <!-- <div class="mu-appbar mu-paper-1">
                    <div class="left" @click="open=false">
                        <i class="icon icon-cancel"></i>
                    </div>
                    <div class="mu-appbar-title">
                        <a href="#"><img src="../../assets/logo.png"></a>
                    </div>
                     <div class="right">
                         <i class="icon icon-my-account"></i>
                     </div>
                 </div> -->
                 <mu-appbar title="Title">
                  <mu-icon-button icon=":icon icon-cancel" slot="left" />
                  <mu-flat-button label="expand_more" slot="right"/>
                  <mu-icon-button icon="expand_more" slot="right"/>
                </mu-appbar>
                <mu-list class="mu-list-left">
                  <mu-list-item  v-for="val in list">
                      <!-- <router-link :to="{ path:name.path }"> -->
                          <p class="chineseName">{{val.ChineseName}}</p>
                          <p class="englishName">{{val.EnglishName}}</p>
                          <i class="icon icon-arrow-left"></i>
                      <!-- </router-link> -->
                  </mu-list-item>
                </mu-list>
                <mu-list class="mu-list-right">
                <!-- <router-view></router-view> -->
                  <mu-list-item  v-for="val in list">
                      <a href="">
                          <img src="../../../static/header/menu_knife.png" alt="">
                          <p>
                              <span>刀具</span><br>
                              <small>Knifes</small>
                          </p>
                          <i class="icon icon-open"></i>
                      </a>
                  </mu-list-item>
                </mu-list>
              </mu-drawer>
            </div>
         </div>
         <div class="header-logo">
             <a href="#"><img src="../../assets/logo.png"></a>
         </div>
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
                     <!-- <mu-badge content="10" class="demo-icon-badge" circle secondary>
                       <mu-icon value='' class="icon icon-shopping"/>
                     </mu-badge> -->
                 </li>
             </ul>
         </div>
     </div>
  </div>
</template>

<script>
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
