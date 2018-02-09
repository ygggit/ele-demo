<template>
  <div id="app">
      <div class="shop-header clearfixed">
          <a href="/index.html"><i class="back"></i></a>
          <span>我的购物车</span>
          <a href="#" class="shop-service"><i class="icon icon-service1"></i></a>
      </div>
      <div class="free-shipping">
          <div class="free-shipping-container">
              <ul>
                  <li>
                      <p>全场满￥200包邮</p>
                  </li>
                  <li>
                      <p>圣诞期间（12.24-12.29）全场购物满 ¥1000 Zwilling磨刀器一枚，赠品数量有限，先到先得。</p>
                  </li>
              </ul>
          </div>
      </div>
      <div class="shop-cart-box">
          <div class="shop-cart-wrapper">
              <div class="shop-list-title clearfixed">
                  <span class="checkedAll" @click="checkedAll()" >
                      <i class="icon" :class=" checkAllFlag ? 'icon-checkbox-pressed':'icon-checkbox-default'" @child-msg="checkedAll(checkAllFlag)"></i>全选</span>
                  <span class="total-product">5件商品</span>
              </div>
              <div class="shopping-list-container">
                  <shopping-list :checkAllFlag="checkAllFlag" :shopProductList="shopProductList"></shopping-list>
              </div>
          </div>
      </div>
      <div class="settlementBox clearfixed">
          <div class="productSettlement">
              <span class="checkedAll" @click="checkedAll()" >
                  <i class="icon" :class=" checkAllFlag ? 'icon-checkbox-pressed':'icon-checkbox-default'" @child-msg="checkedAll(checkAllFlag)"></i>全选</span>
                  <span class="totalMoney">总计：{{totalMoney}}</span>
          </div>
          <a href="JavaScript:;" class="settlement">立即结算</a></div>

  </div>
</template>

<script>
import shoppingList from '../../components/shoppingList/shoppingList'
import dropDown from '../../components/dropdownBox/dropdownBox'
import num from '../../components/num/num'
export default {
  data(){
      return{
          "shopProductList":[],
          "checkAllFlag":false,
          "totalMoney":0
      }
  },
  watch:{
      // console.info()
  },
  mounted(){
      this.$http.get('../../../static/data.json').then( res => {
          this.shopProductList = res.data.shopCartList.result.shopList;
      }).catch(error => {
      });
  },
  methods:{
      checkedAll(){
          this.checkAllFlag = !this.checkAllFlag
          let _this = this;
          this.shopProductList.forEach(function(val,index){
              // 判断是否注册checked
              if(typeof val.checked == 'undefined'){
                  // 注册监听变量
                  _this.$set(val,"checked",_this.checkAllFlag);
              }else{
                  val.checked = _this.checkAllFlag;
              }
         })
      }
  },
  components: {
      shoppingList,
      num,
      dropDown
  },


}
</script>
<style lang="less">
.shop-header{
    height:45px;
    padding:0 12px;
    background:#fff;
    border-bottom:1px solid #F1F0EE;
    a{
        display: inline-block;
        width:33.33%;
        float: left;
        line-height:45px;
        i.back{
            display: inline-block;
            width:10px;
            height:10px;
            border-right:1px solid #333;
            border-bottom:1px solid #333;
            transform: rotate(135deg);
        }
        &.shop-service{
            text-align: right;
            i{
                vertical-align: middle;
                margin-right: 0
            }
        }
    }
    span{
        display: inline-block;
        float: left;
        width:33.33%;
        line-height: 45px;
        font-size:16px;
        text-align: center;
    }
}
.free-shipping{
    padding: 10px 48px 10px 10px;
    font-size: 12px;
    color: #807c77;
    background:#fff;
    .free-shipping-container{
        height:48px;
        overflow: hidden;
        ul{
            li{
                margin-bottom:6px;
                p{
                    line-height: 20px;
                    position: relative;
                    padding-left:12px;
                    &:before{
                        position: absolute;
                        display: block;
                        content:'';
                        height:4px;
                        width:4px;
                        background:#999;
                        top:8px;
                        left:0;
                    }
                }
            }
        }
    }
}
.shop-cart-box{
    .shop-cart-wrapper{
        .shop-list-title{
            height:48px;
            padding: 0 12px;
            line-height: 48px;
            span{
                font-size: 14px;
                color: #333333;
                letter-spacing: 0;
                i{
                    vertical-align: middle;
                    margin-right:14px;
                }
                &.total-product{
                    float:right;
                }
            }
        }
        .shopping-list-container{
            // padding:0 12px;
        }
    }
}
.shopart-list{
    margin-bottom:8px;
    background:#fff;
    .commodity-detail{
        .commodity-editor{
            height:40px;
            line-height:40px;
            padding:0 12px;
            border-bottom:1px solid #f8f8f8;
            span{
                i{
                    vertical-align: middle;
                }
                &.operation{
                    float:right;
                    i{
                        margin:0 8px 0 12px;
                    }
                }
            }
        }
        .commodity-box{
            position: relative;
            padding:0 12px;
            >div{
                padding:10px 0;
                float:left;
                font-size: 12px;
                color:#333;
                &.commodity-img{
                    width:100px;
                    position: absolute;
                    top:0;
                    left:12px;
                    img{
                        width:100%;
                    }
                }
                &.commodity-info{
                    width:100%;
                    padding-left:110px;
                    .commodity-brand{
                        line-height:12px;
                        margin-bottom:6px;
                    }
                    .commodity-specifications{
                        margin:10px 0;
                    }
                    .specifications,.quantity{
                        padding:10px 0;
                        >p{
                            vertical-align: middle;
                            display: inline-block;
                        }
                        .num-wrapper,.dropdownWrapper{
                            vertical-align: middle;
                            display: inline-block;
                        }
                    }
                }
                >div{
                    .commodity-price{
                        float:left;
                        .commodity-new-price{
                            display: inline-block;
                            font-size:13px;
                            font-weight: bold;
                            margin-right:4px;
                        }
                        .commodity-old-price{
                            color: #CCCBC9;
                        }
                    }
                    .commodity-count{
                        float:right;
                        .residual-quantity{
                            display: inline-block;
                            margin-right:12px;
                        }
                    }
                }
            }
        }
    }
}
.settlementBox{
    position:fixed;
    width: 100%;
    height:40px;
    background:#fff;
    z-index: 100;
    bottom: 0;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.25);
    .productSettlement{
        font-size: 14px;
        width: 66%;
        float: left;
        line-height: 40px;
        padding: 0 12px;
        span{
            vertical-align: middle;
            &.totalMoney{
                float:right;
                right:0;
            }
        }
        i{
            vertical-align: middle;
            margin-right:14px;
        }
    }
    .settlement{
        float: right;
        font-size: 12px;
        width: 34%;
        background:#c80000;
        color:#fff;
        height:40px;
        line-height: 40px;
        text-align: center;
    }
}
</style>
