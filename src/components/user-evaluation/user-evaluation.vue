<template lang="html">
  <div class="product-info">
      <div class="total-score">
          <p class="score">总评分：<span>4.5</span></p>
          <div class="star-wrapper">
              <star :score="score"></star>
          </div>
      </div>
      <div class="user-evaluation-container">
          <ul>
              <li>
                  <div class="evaluate-item-tit clearfixed">
                      <div class="evaluate-name">匿名用户</div>
                      <div class="star-wrapper">
                          <star></star>
                      </div>
                      <div class="evaluate-score">5.0</div>

                  </div>
                  <div class="evaluate-item-text">
                      <p>相当好用的一款刀具产品，切菜十分轻松，刀本身很轻，用过最好的同类产品，赞！</p>
                  </div>
                  <div class="evaluate-item-specification">
                        <span>规格选择：中片刀</span>
                  </div>
              </li>
              <li>
                  <div class="evaluate-item-tit clearfixed">
                      <div class="evaluate-name">匿名用户</div>
                      <div class="star-wrapper">
                          <star></star>
                      </div>
                      <div class="evaluate-score">5.0</div>

                  </div>
                  <div class="evaluate-item-text">
                      <p>相当好用的一款刀具产品，切菜十分轻松，刀本身很轻，用过最好的同类产品，赞！</p>
                  </div>
                  <div class="evaluate-item-specification">
                        <span>规格选择：中片刀</span>
                  </div>
              </li>
              <li>
                  <div class="evaluate-item-tit clearfixed">
                      <div class="evaluate-name">匿名用户</div>
                      <div class="star-wrapper">
                          <star></star>
                      </div>
                      <div class="evaluate-score">5.0</div>

                  </div>
                  <div class="evaluate-item-text">
                      <p>相当好用的一款刀具产品，切菜十分轻松，刀本身很轻，用过最好的同类产品，赞！</p>
                  </div>
                  <div class="evaluate-item-specification">
                        <span>规格选择：中片刀</span>
                  </div>
              </li>
          </ul>
      </div>
      <div class="box-container">
         <div class="title">
             <h2>相关产品</h2>
         </div>
         <div class="container-list">
             <productSwiper></productSwiper>
         </div>
      </div>
  </div>
</template>

<script>
import star from '../../components/star/star'
import productSwiper from '../../components/product-swiper/product-swiper'
export default {
    data(){
        return{
            "score":4.6
        }
    },
    components:{
        star,
        productSwiper
    }
}
</script>

<style lang="less">
@import 'user-evaluation.less';
</style>
