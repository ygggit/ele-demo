<template lang="html">
    <div class="container-box container-bg">
        <scroll></scroll>
        <div class="box-container">
           <div class="title">
               <h2>旗下品牌</h2>
           </div>
           <div class="container-list">
               <ul>
                   <li>
                       <a href="#">
                           <img src="../../../static/kv/brands_ballarini@2x.png" alt="">
                           <p>双立人</p>
                       </a>
                   </li>
                   <li>
                       <a href="#">
                           <img src="../../../static/kv/brands_staub@2x.png" alt="">
                           <p>珐宝*</p>

                       </a>
                   </li>
                   <li>
                       <a href="#">
                           <img src="../../../static/kv/header_zwilling logo@2x.png" alt="">
                           <p>巴拉利尼</p>
                       </a>
                   </li>
               </ul>
           </div>
        </div>
        <div class="box-container">
           <div class="title">
               <h2>场景化分类</h2>
           </div>
           <div class="container-list">
               <ul>
                   <li>
                       <a href="#">
                           <i class="icon icon-house"></i>
                           <p>乔迁佳品</p>
                       </a>
                   </li>
                   <li>
                       <a href="#">
                           <i class="icon icon-gifts"></i>
                           <p>礼意之选</p>

                       </a>
                   </li>
                   <li>
                       <a href="#">
                           <i class="icon icon-two-world"></i>
                           <p>二人世界</p>

                       </a>
                   </li>
                   <li>
                       <a href="#">
                           <i class="icon icon-women"></i>
                           <p>主妇帮手</p>
                       </a>
                   </li>
                   <li>
                       <a href="#">
                           <i class="icon icon-taste"></i>
                           <p>德味精选</p>
                       </a>
                   </li>
                   <li>
                       <a href="#">
                           <i class="icon icon-more"></i>
                           <p>更多</p>
                       </a>
                   </li>
               </ul>
           </div>
        </div>
        <div class="box-container">
           <div class="title">
               <h2>明星产品</h2>
               <div class="">
                   <span>查看更多<i class="icon icon-arrow-left"></i></span>
               </div>
           </div>
           <div class="container-list">
               <productSwiper></productSwiper>
           </div>
        </div>
        <div class="brand-story">
            <img src="../../../static/img/mob-brand@2x.png" alt="">
            <div class="story-text">
               <h2>SINCE 1731.</h2>
               <p>德国双立人集团，体验280多年的经典传奇时间验证一切，它不动声色，只留存经典。 1731年，德国双立人诞生！优质的钢材、精湛的技术，赋予双立人独特的个性：气质超群、坚韧而不畏侵蚀、不断追求完美与平衡。</p>
               <a href="#"><span>查看更多<i class="icon icon-arrow-left"></i></span></a>
            </div>
        </div>
        <div class="story-list">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(val,index) in storyImg" :key="index">
                    <a>
                        <img :src="val.imgSrc" alt="">
                        <div>
                            <img :src="val.smallSrc">
                        </div>
                    </a>
                </swiper-slide>
            </swiper>
        </div>
        <div class="box-container">
           <div class="title">
               <h2>我们的服务</h2>
               <div class="">
                   <span>查看更多<i class="icon icon-arrow-left"></i></span>
               </div>
           </div>
           <div class="container-list special-list">
               <ul>
                   <li>
                       <a>
                           <i class="icon icon-sale-service"></i>
                           <div class="">
                               <h2>售后服务</h2>
                               <p>我们的承诺：双立人为您提供多渠道的优质售后服务。双立人为您提供多渠提供多渠提供多</p>
                           </div>
                           <i class="icon icon-arrow-left"></i>
                       </a>
                   </li>
                   <li>
                       <a>
                           <i class="icon icon-maintain"></i>
                           <div class="">
                               <h2>厨具保养</h2>
                               <p>我们的承诺：双立人为您提供多渠道的优质售后服务。</p>
                           </div>
                           <i class="icon icon-arrow-left"></i>
                       </a>
                   </li>
                   <li>
                       <a>
                           <i class="icon icon-membership-system"></i>
                           <div class="">
                               <h2>会员制度</h2>
                               <p>我们的承诺：双立人为您提供多渠道的优质售后服务。</p>
                           </div>
                           <i class="icon icon-arrow-left"></i>
                       </a>
                   </li>
               </ul>
           </div>
        </div>
        <div class="shop">
            <ul>
                <li>
                    <img src="../../../static/img/mob-flagship-store.png" alt="">
                    <div class="">
                        <i class="icon icon-flagship"></i>
                        <img src="../../../static/img/zl-house@2x.png" alt="">
                        <p>双立人太古汇旗舰店</p>
                        <a href="#">查看详情</a>
                    </div>
                </li>
                <li>
                    <img src="../../../static/img/mob-room.png" alt="">
                    <div class="">
                        <i class="icon canting"></i>
                        <img src="../../../static/img/the-twins@2x.png" alt="">
                        <p>双立人太古汇旗舰店</p>
                        <a href="#">查看详情</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import scroll from '../../components/scroll/scroll'
import productSwiper from '../../components/product-swiper/product-swiper'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    data(){
        return{
            "storyImg":[
                {
                    "imgSrc":"../../../static/img/pic-college@2x.png",
                    "smallSrc":"../../../static/img/title-mob-ms@2x.png"
                },
                {
                    "imgSrc":"../../../static/img/pic-enjoyed@2x.png",
                    "smallSrc":"../../../static/img/title-mob-share@2x.png"
                },
                {
                    "imgSrc":"../../../static/img/pic-video@2x.png",
                    "smallSrc":"../../../static/img/title-mob-video@2x.png"
                }
            ],
            swiperOption:{
                slidesPerView : 1.5,
                spaceBetween : 16,
            }
        }
    },
    components:{
        scroll,
        productSwiper,
        swiper,
        swiperSlide
    }
}
</script>

<style lang="less">
@import 'index.less';
</style>
