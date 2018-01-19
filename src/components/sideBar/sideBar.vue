<template lang="html">
    <div class="nav-wrapper">
        <ul class="nav-content">
            <li v-for="(val,index) in list" :key="index" :class="{'active':index===activeIndex}" @click="changeMenu(index)">
                <a :href="val.menuUrl">
                    <div class="">
                        <p class="chineseName">{{val.ChineseName}}</p>
                        <p class="englishName">{{val.EnglishName}}</p>
                        <i class="icon icon-arrow-left" v-if="val.menuSub.length>0"></i>
                    </div>
                </a>
                <div class="sub-menu" v-show="index===activeIndex">
                    <ul>

                        <li v-for="(menuSubVal,index) in val.menuSub" :key="index"  :class="{'is-open':menuSubVal.isSubShow && index === secondActiveIndex}">
                            <a href="javascript:;" @click="toggleShowMenu(menuSubVal,index)">
                                <img :src="menuSubVal.imgUrl" alt="">
                                <p>
                                    <span>{{menuSubVal.menunamec}}</span><br>
                                    <small>{{menuSubVal.menunamee}}</small>
                                </p>
                                <i class="icon" :class=" menuSubVal.isSubShow && index === secondActiveIndex ? 'icon-hide' : 'icon-open'"></i>
                            </a>
                                <!--  v-show="menuSubVal.isSubShow" -->
                            <transition name="fade">
                                <ul class="clearfixed">
                                    <li v-for="(classificationVal,index) in menuSubVal.classification" :key="index">
                                        <router-link :to="{params:'' }">
                                            <img :src="classificationVal.calssificateUrl" alt="">
                                            <p>{{classificationVal.classificateName}}</p>
                                        </router-link>
                                    </li>

                                </ul>
                            </transition>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        list: {
          type: Array
        }
    },
    data(){
        return{
            activeIndex:0,
            secondActiveIndex:'',
            currentUrl:'',
            iconClass:['icon-open','icon-hide']
        }
    },
    watch: {
      // '$route'() {
      //   this.currentUrl = this.$route.fullPath; // 实时监测当前路由的变化并且赋值
      // }

    },
    computed:{
        listData:function () {
            return this.$parent.$data.list;
        }
    },
    methods:{
        changeMenu(index){

            this.activeIndex = index
        },
        toggleShowMenu(menuSubVal,index){
            // for(let [itemIndex, item] of data.entries()){
                // console.info(item,'item')
                // console.info(itemIndex,'itemIndex')
                // console.info(index)
                // if(itemIndex === index){
                    menuSubVal.isSubShow = !menuSubVal.isSubShow
                // }else{
                    // item.isSubShow = false;
                // }
            // }
            this.secondActiveIndex = index;

        }
    },
    created(){
        console.info(this)
    }
}
</script>

<style lang="less">
@import "sideBar.less";
</style>
