<template lang="html">
  <div class="header">
     <div class="nav-top">
         <p>注册成为双立人会员并完善资料或得您的首单优惠券</p>
     </div>
     <div class="header-container">
         <i class="icon icon-menu"></i>
         <!-- <div class="header-left">

         </div>
         <div class="header-right">

         </div> -->
         <mu-appbar title="Title">
          <mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
          <mu-flat-button color="white" label="flat Button" slot="right"/>
        </mu-appbar>
     </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
@import 'header.less';
</style>
