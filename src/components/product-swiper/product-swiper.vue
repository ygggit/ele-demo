<template lang="html">
<swiper :options="swiperOption">
    <swiper-slide v-for="(val,index) in productList" :key="index">
        <div class="">
            <a href="#" class="product-img">
                <img :src="val.imgSrc" alt="">
                <div class="new-product" v-show="val.tag.length>0">
                    <span>{{val.tag}}</span>
                </div>
            </a>
            <div class="product-detail">
                <a href="#">
                    <p class="product-brand">{{val.productBrand}}</p>
                    <p class="product-name">{{val.productName}}</p>
                    <div class="product-price">
                        <span class="now-price">{{val.nowPrice}}</span>
                        <del class="old-price">{{val.oldPrice}}</del>
                    </div>
                </a>
            </div>
        </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
</swiper>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    data(){
        return{
            "productList":[
                {
                    "imgSrc":"../../../static/img/item.png",
                    "tag":"热卖",
                    "productBrand":"ZWILLING",
                    "productName":"中片刀砍骨刀菜刀多用刀不锈钢刀具组合刀具组刀具组合组合组合组合组合组合",
                    "nowPrice":"￥1,388.00",
                    "oldPrice":"￥1,888.00"
                },
                {
                    "imgSrc":"../../../static/img/item.png",
                    "tag":"新品",
                    "productBrand":"ZWILLING",
                    "productName":"中片刀砍骨刀菜刀多用刀不锈钢刀具组合刀具组刀具组合组合组合",
                    "nowPrice":"￥1,388.00",
                    "oldPrice":"￥1,888.00"
                },
                {
                    "imgSrc":"../../../static/img/item.png",
                    "tag":"",
                    "productBrand":"ZWILLING",
                    "productName":"中片刀砍骨刀菜刀多用刀不锈钢刀具组合刀具组刀具组合组合组合",
                    "nowPrice":"￥1,388.00",
                    "oldPrice":"￥1,888.00"
                },
                {
                    "imgSrc":"../../../static/img/item.png",
                    "tag":"新品",
                    "productBrand":"ZWILLING",
                    "productName":"中片刀砍骨刀菜刀多用刀不锈钢刀具组合刀具组刀具组合组合组合",
                    "nowPrice":"￥1,388.00",
                    "oldPrice":"￥1,888.00"
                },
                {
                    "imgSrc":"../../../static/img/item.png",
                    "tag":"",
                    "productBrand":"ZWILLING",
                    "productName":"中片刀砍骨刀菜刀多用刀不锈钢刀具组合刀具组刀具组合组合组合",
                    "nowPrice":"￥1,388.00",
                    "oldPrice":"￥1,888.00"
                },
                {
                    "imgSrc":"../../../static/img/item.png",
                    "tag":"",
                    "productBrand":"ZWILLING",
                    "productName":"中片刀砍骨刀菜刀多用刀不锈钢刀具组合刀具组刀具组合组合组合",
                    "nowPrice":"￥1,388.00",
                    "oldPrice":"￥1,888.00"
                },
                {
                    "imgSrc":"../../../static/img/item.png",
                    "tag":"",
                    "productBrand":"ZWILLING",
                    "productName":"中片刀砍骨刀菜刀多用刀不锈钢刀具组合刀具组刀具组合组合组合",
                    "nowPrice":"￥1,388.00",
                    "oldPrice":"￥1,888.00"
                },
                {
                    "imgSrc":"../../../static/img/item.png",
                    "tag":"",
                    "productBrand":"ZWILLING",
                    "productName":"中片刀砍骨刀菜刀多用刀不锈钢刀具组合刀具组刀具组合组合组合",
                    "nowPrice":"￥1,388.00",
                    "oldPrice":"￥1,888.00"
                }
            ],
            "swiperOption":{
                notNextTick:true,
                speed:300,
                pagination: {
                  el: '.swiper-pagination',
                  clickable :true,
                },
                slidesPerView : 2,
            }
        }
    }
}
</script>

<style lang="less" scoped>
.swiper-slide{
    background: #fff;
    border-right:1px solid #F2F0EE;
    &:nth-child(2n+2){
        border-right:none;
    }
    .product-img{
        position: relative;
        width: 100%;
        img{
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
    .product-detail{
        padding:0 12px;
        .product-brand{
            font-size: 14px;
            color: #333333;
            letter-spacing: 1px;
        }
        .product-name{
            font-size: 12px;
            color: #333333;
            letter-spacing: 0;
            margin:7px 0 6px 0;
            line-height: 20px;
            height: 40px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .product-price{
            .now-price{
                font-size: 16px;
                color: #ee1c25;
                letter-spacing: 0;
                line-height: 22px;
            }
            .old-price{
                font-size: 12px;
                color: #BBB9B5;
                letter-spacing: 0;
                margin-left: 5px;
            }
        }
    }
}
.swiper-pagination{
    position: static;
}
.swiper-container-horizontal>.swiper-pagination-bullets{
    bottom:16px;
    padding:16px 0;
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
