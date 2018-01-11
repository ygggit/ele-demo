<template>
  <div id="app">
     <v-header></v-header>
     <div class="nav">
         <router-link to="/foo">foo</router-link>
         <router-link to="/bar">bar</router-link>
         <router-link to="/aa">aa</router-link>
     </div>
     <div class="">
         <p>内容</p>
         <router-view></router-view>
     </div>
     <mu-paper class="demo-menu">
      <mu-menu desktop>
        <mu-menu-item title="Single" inset/>
        <mu-menu-item title="1.15" inset/>
        <mu-menu-item title="Double" inset/>
        <mu-menu-item title="Custom: 1.2" rightIcon="keyboard_arrow_right" leftIcon="check">
          <mu-menu-item title="Show" rightIcon="keyboard_arrow_right">
            <mu-menu-item title="Show Level 2" />
            <mu-menu-item title="Grid lines" leftIcon="check" />
            <mu-menu-item title="Page breaks" inset/>
            <mu-menu-item title="Rules" leftIcon="check" />
          </mu-menu-item>
          <mu-menu-item title="Grid lines" leftIcon="check" />
          <mu-menu-item title="Page breaks" inset/>
          <mu-menu-item title="Rules" leftIcon="check" />
        </mu-menu-item>
        <mu-divider />
        <mu-menu-item title="Add space before paragraph" />
        <mu-menu-item title="Add space after paragraph" />
        <mu-divider />
        <mu-menu-item title="Custom spacing..." />
      </mu-menu>
    </mu-paper>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from './components/header/header'
import VFooter from './components/footer/footer'
export default {
  name: 'app',
  data(){
      return{
      }
  },
  components: {
    VHeader,
    VFooter
  },


}
</script>
<style lang="less">
@import './common/common.less';
</style>
