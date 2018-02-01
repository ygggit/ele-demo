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
               <!-- 侧边栏 -->
               <sideBar :list = "list"></sideBar>
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
                     <a href="../../../shop.html">
                         <i class="icon icon-shopping"></i>
                         <em>{{cartNum}}</em>
                     </a>
                 </li>
             </ul>
         </div>
     </div>
  </div>
</template>

<script>
import Bus from '../../bus.js'
import sideBar from "../sideBar/sideBar.vue"
export default {
    data(){
        return{
             "open": false,
             "cartNum":0,
             "list":[]
        }
    },
    mounted:function(){
        var _this=this;
        // 接收数据 侧边
        Bus.$on('txt',function(open,){//监听first组件的txt事件
          _this.open = open ;
          console.log(_this.open);
        });
        Bus.$on('txt1',function(cartNum){//监听first组件的txt事件
          _this.cartNum =cartNum;
          console.log(_this.cartNum)
        });
    },
    methods:{
        toggle () {
            console.log(123)
            console.log(this.open)
            this.open = ! this.open
            console.log(this.open)
          // this.open = !this.open;

        }
    },
    created(){
      // 此方法要使用全局变量
      // axios.get('../../data.json')
      // .then(response => {
      //     console.info(123)
      // })
      // .catch(error => {
      //
      // });
      this.$http.get('../../../static/data.json')
      .then(response => {
          console.info(response.data.list)
          this.list = response.data.list
          // console.log(typeof(response.data));
          // console.log(JSON.parse(response.data));
      })
      .catch(error => {

      });
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
