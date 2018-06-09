<template lang="html">
  <div class="pdp-wrapper">
      <scroll :imgList="imgList"></scroll>
      <div class="product-detail-box">
          <div class="product-detail clearfixed">
              <div class="product-detail-name">
                  <h2>双立人TWIN Pollux波格斯系列片刀TWIN Pollux波格斯系列片刀</h2>
                  <p>产品编号：30795-200-722</p>
              </div>
              <div class="product-detail-share">
                <i class="icon icon-share"></i>
                <span>分享</span>
              </div>
          </div>
          <div class="promotion">
              <span>促销：</span>
              <span>圣诞期间（12.24-12.29）间下单就送Zwilling磨刀器一枚。</span>
          </div>
          <div class="product-detail-price">
              <span class="pdp-new-price">￥699.00</span>
              <span class="pdp-old-price">￥699.00</span>
          </div>
          <div class="product-list-item event-pdp-detail">
              <div class="productItem" @click="productSelect">
                  <span>选择规格/数量：<i class="icon icon-arrow-left"></i></span>
              </div>
              <div class="productItem productItem1">
                  <span>产品描述：<i class="icon icon-open"></i></span>
                  <div class="pdp-detail" style="display:none;">
                      <p>刀身采用双立人特殊配方不锈钢冲压件，碳和铬的比例达到最佳平衡，兼具硬度和锐利；经FRIODUR®冰煅工艺处理，令钢材结构更稳定，刀具抗腐蚀、韧性十足，刀刃更持久锋利；手柄使用经典的三重铆钉设计，美观牢固；崭新的人体工程学手柄带来更佳的握感，使用得心应手。</p>
                  </div>
              </div>
              <div class="productItem productItem1">
                  <span>产品参数：<i class="icon icon-open"></i></span>
                  <div class="pdp-detail" style="display:none;">
                      <p>材质：双立人特制配方不锈钢</p>
                      <p>尺寸：165mm（刀刃）</p>
                      <p>重量：244g</p>
                      <p>产地：德国</p>
                      <p>刀柄颜色：黑色</p>
                      <p>用途：为中式料理设计，切鱼、肉、蔬菜均可</p>
                  </div>
              </div>
          </div>
          <!-- 商品种类 数量选择 -->
          <div class="product-mask" v-show="showProduct" @click="hideProduct"></div>
          <div class="product-sku-fixed" v-show="showProduct" :class="showProduct ? 'show-product-sku-fixed':''">
              <div class="product-sku">
                  <div class="product-select product-specification">
                      <p>规格选择：</p>
                      <selectSpecification :specification="specification"></selectSpecification>
                  </div>
                  <div class="product-select product-num">
                      <p>数量选择</p>
                      <num @buyNumber="get" :count="buyNum"></num>
                  </div>
                  <div class="product-collection" @click="collect">
                      <span><i class="icon" :class="changeIcon ? 'icon-like-pressed':'icon-like'"></i>添加至收藏夹</span>
                  </div>
                  <a href="javascript:;" class="btn-close" @click="hideProduct"><i class="icon icon-close"></i></a>
              </div>
          </div>

      </div>
      <div class="product-info-box">
          <!-- 第一种写法 -->
          <!-- <div class="product-info-title">
              <ul>
                  <li v-for="(proName,index) in productTitle" :class="{'active':index === produceIndex}" :key="index" @click="changeInfo(index)">
                      <p>{{proName.name}}</p>
                  </li>
              </ul>
          </div>
         <div class="product-info-container">
            <div class="product-info" v-show="produceIndex===0">
                <img src="../../../static/img/product-info-img.png" alt="">
            </div>
            <div class="product-info" v-show="produceIndex===1">
                <star></star>
            </div>
            <div class="product-info" v-show="produceIndex===2">
                <img src="../../../static/img/product-info-img.png" alt="">
            </div>
         </div> -->
         <!-- 第二种路由 -->
         <div class="product-info-title">
             <div class="product-infomation">
                 <div class="title">
                     <router-link to="/productIntroduction">产品介绍</router-link>
                 </div>
                 <div class="title">
                     <router-link to="/userEvaluation">用户评价</router-link>
                 </div>
                 <div class="title">
                     <router-link to="/productMaintenance">产品保养</router-link>
                 </div>
             </div>
             <div class="product-info-container">
                 <keep-alive>
     				<router-view></router-view>
     			</keep-alive>
             </div>
         </div>
      </div>
      <div class="box-container">
         <div class="title">
             <h2>相关产品</h2>
         </div>
         <div class="container-list">
             <productSwiper></productSwiper>
         </div>
      </div>
      <div class="box-container">
         <div class="title">
             <h2>最近浏览</h2>
         </div>
         <div class="container-list">
             <productSwiper></productSwiper>
         </div>
      </div>
      <div class="product-btn clearfixed">
          <a href="#" class="btn-service"><i class="icon icon-service1"></i></a>
          <a href="javascript:;" class="add-cart" @click="send">加入购物车</a>
          <a href="/shop.html" class="order-now">立即购买</a>
      </div>
  </div>
</template>

<script>
import Bus from '../../bus.js'
import scroll from '../scroll/scroll'
import productSwiper from '../product-swiper/product-swiper'
import selectSpecification from '../selectSpecification/selectSpecification'
import num from '../num/num'
export default {
    data(){
        return{
            // "produceIndex":0,
            "showProduct":false,
            "changeIcon":false,
            "buyDefaultNum":1,
            "buyNum":0,
            "imgList":[
                {
                    "imgLink":"../../../static/img/item.png",
                    "tag":"热卖",
                    "url":''
                },
                {
                    "imgLink":"../../../static/img/item.png",
                    "tag":"热卖",
                    "url":''
                },
                {
                    "imgLink":"../../../static/img/item.png",
                    "tag":"热卖",
                    "url":''
                },
                {
                    "imgLink":"../../../static/img/item.png",
                    "tag":"热卖",
                    "url":''
                }
            ],
            // "productTitle":[
            //     {
            //         "name":"产品介绍"
            //     },
            //     {
            //         "name":"用户评价"
            //     },
            //     {
            //         "name":"产品保养"
            //     }
            // ],
            "specification":[
                {"name":"中片刀"},
                {"name":"大片刀"},
                {"name":"小片刀"}
            ]

        }
    },
    methods:{
        // changeInfo(index){
        //     let that = this;
        //     this.produceIndex = index;
        // }
        productSelect(){
            let me = this;
            me.showProduct = true;
        },
        hideProduct(){
            let me = this;
            me.showProduct = false;
        },
        collect(){
            this.changeIcon = !this.changeIcon;
        },
        get(msg){
            this.buyNum = msg
            console.info("获取数据",this.buyNum)
        },
        send(){
            // let me = this;
            // me.showProduct = true;
            // if(this.buyNum == this.buyDefaultNum){
                this.buyNum++
            // }
            Bus.$emit('txt1',this.buyNum);
            console.log("将要发送的数据",this.buyNum)
        }
    },
    components:{
        scroll,
        productSwiper,
        selectSpecification,
        num
    }
}
$(function(){
    let $detailsTitle = $('.event-pdp-detail .productItem1>span');
    $detailsTitle.on('click',function(){
        let $this = $(this);
        $this.siblings('.pdp-detail').stop(true, true).slideToggle().parent().
        siblings('.productItem1').children('.pdp-detail').slideUp();
        if ($this.children('i').hasClass('icon-open')) {
			$detailsTitle.children('i').removeClass('icon-hide').addClass('icon-open');
			$this.children('i').removeClass('icon-open').addClass('icon-hide');
		} else {
			$this.children('i').removeClass('icon-hide').addClass('icon-open');
		}
    })
})
</script>

<style lang="less" scoped>
body{
    padding-bottom:41px;
}
@import 'pdp.less';
</style>
