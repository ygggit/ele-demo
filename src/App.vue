<template>
  <div id="app">
     <v-header></v-header>
     <div class="zwilling-container">
         <keep-alive>
           <router-view></router-view>
         </keep-alive>
     </div>
    <v-footer></v-footer>
    <back-top :scrollmyself = 'true'></back-top>
  </div>
</template>

<script>
import VHeader from './components/header/header'
import VFooter from './components/footer/footer'
import BackTop from './components/back-top/back-top'
export default {
  name: 'app',
  data(){
      return{

      }
  },
  components: {
    VHeader,
    VFooter,
    BackTop
  },


}
</script>
<style lang="less">
.zwilling-container{
    padding-top:84px;
}
</style>
