<template lang="html">
    <!-- 侧边栏 -->
    <div class="nav-wrapper">
        <ul class="nav-content">
            <li v-for="(val,index) in list" :key="index" :class="{'active':index===activeIndex}" @click="changeMenu(index)">
                <!-- 一级菜单 -->
                <a :href="val.menuUrl">
                    <div class="">
                        <p class="chineseName">{{val.ChineseName}}</p>
                        <p class="englishName">{{val.EnglishName}}</p>
                        <i class="icon icon-arrow-left" v-if="val.menuSub.length>0"></i>
                    </div>
                </a>
                <!-- 二级菜单 -->
                <div class="sub-menu" v-show="index===activeIndex">
                    <ul>
                        <li v-for="(menuSubVal,selfIndex) in val.menuSub" :key="selfIndex"  :class="{'is-open':menuSubVal.isSubShow && selfIndex === secondActiveIndex}">
                            <a href="javascript:;" @click="toggleShowMenu(index,selfIndex)">
                                <img :src="menuSubVal.imgUrl" alt="">
                                <p>
                                    <span>{{menuSubVal.menunamec}}</span><br>
                                    <small>{{menuSubVal.menunamee}}</small>
                                </p>
                                <i class="icon" :class=" menuSubVal.isSubShow && selfIndex === secondActiveIndex ? 'icon-hide' : 'icon-open'"></i>
                            </a>
                            <!-- 三级菜单 -->
                            <transition name="fade">
                                <ul class="clearfixed">
                                    <li v-for="(classificationVal,index) in menuSubVal.classification" :key="index" @click="hideSide(open)">
                                        <router-link to="/plp" >
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
import Bus from '../../bus.js'
export default {
    props:{
        list: {
          type: Array
        }
    },
    data(){
        return{
            open:false,
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
        // listData:function () {
        //     return this.$parent.$data.list;
        // }
    },
    methods:{
        hideSide(){
            // 传递数据
            Bus.$emit('txt',this.open);
        },
        changeMenu(index){
            console.log("测试index",index)
            console.log("测试点击index",this.activeIndex)
            this.activeIndex = index
        },
        toggleShowMenu(index,selfIndex){
            // 第一种方案
            // for(let [itemIndex, item] of this.list.entries()){
            //     for(let [itemIndex1, item1] of item.menuSub.entries() ){
            //         console.info(item1.isSubShow)
            //         if(itemIndex1 === index){
            //             item1.isSubShow = !item1.isSubShow
            //         }else{
            //             item1.isSubShow = false;
            //         }
            //     }
            // }
            // 第二种
            for(let [itemIndex, item] of this.list[index].menuSub.entries() ){
                console.info(this.list[index].menuSub)
                if(itemIndex === selfIndex){
                    item.isSubShow = !item.isSubShow
                }else{
                    item.isSubShow = false;
                }
            }
            this.secondActiveIndex = selfIndex;

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
