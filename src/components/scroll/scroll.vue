<template lang="html">
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(img,index) in imgList" :key="index">
        <a :href="img.url">
            <img :src="img.imgLink">
            <div class="new-product" v-show="img.tag.length>0">
                <span>{{img.tag}}</span>
            </div>
        </a>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
  </swiper>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    props:['imgList'],
    data(){
        return{
            swiperOption:{
                loop:true,
                notNextTick:true,

                paginationClickable: true,
                pagination: {
                  el: '.swiper-pagination',
                  clickable :true,
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
            }
        }
    },
    components:{
        swiper,
        swiperSlide
    },
    computed:{
         // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
        swiper() {
            return this.$refs.mySwiper.swiper
            console.info(this.$refs.mySwiper.swiper)
        }
    },
    mounted() {
            console.info(this.$refs)
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            // this.swiper.slideTo(3, 1000, false)
    }
}
</script>

<style lang="less">
.swiper-container{
    width:100%;
    .swiper-slide a{
        width: 100%;
        position: relative;
        >img{
            width:100%;
        }
        .new-product{
    		position: absolute;
    		background:#edecec;
    		padding:2px 6px;
    		top:7px;
    		left:9px;
    		span{
    			font-size: 12px;
    			color: #807C77;
    			letter-spacing: 0;
    		}
    	}
    }
}
.swiper-container-horizontal>.swiper-pagination-bullets{
    bottom:16px;
    .swiper-pagination-bullet{
        width: 8px;
        height: 8px;
        border-radius: 0;
        background: #cccbc9;
        opacity: 1;
        bottom: 50px;
        &.swiper-pagination-bullet-active{
            background:#ee1d25;
        }
    }
}

</style>
