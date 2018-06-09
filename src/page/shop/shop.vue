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
      <!-- 商品列表  -->
      <div class="shop-cart-box">
          <div class="shop-cart-wrapper">
              <div class="shop-list-title clearfixed">
                  <span class="checkedAll" @click="checkedAll()" >
                      <i class="icon" :class=" checkAllFlag ? 'icon-checkbox-pressed':'icon-checkbox-default'" @child-msg="checkedAll(checkAllFlag)"></i>全选</span>
                  <span class="total-product">5件商品</span>
              </div>
              <div class="shopping-list-container">
                  <!-- <shopping-list :checkAllFlag="checkAllFlag" :shopProductList="shopProductList"></shopping-list> -->
                  <!-- 商品 -->
                  <div>
                      <div class="shopart-list" v-for="(val,index) in shopProductList" :key="index">
                          <div class="commodity-detail">
                              <div class="commodity-editor clearfixed" >
                                  <span><i class="icon" :class=" val.checked ? 'icon-checkbox-pressed':'icon-checkbox-default'" @click="checkcommodity(val)"></i></span>
                                  <!-- 编辑 -->
                                  <span class="operation" v-show="!val.isEdit">
                                      <i class="icon icon-trash" @click="delConfirme(val)"></i>
                                      <i class="icon icon-like"></i>
                                      <i class="icon icon-edit" @click="editInfo(index)"></i>
                                  </span>
                                  <span class="finished" @click="finished(index)" v-show="val.isEdit">完成</span>
                              </div>
                              <div class="commodity-box clearfixed">
                                  <div class="commodity-img">
                                      <a href="#">
                                          <img :src="val.productImage" alt="">
                                      </a>
                                  </div>
                                  <div class="commodity-info" v-show="!val.isEdit">
                                      <p class="commodity-brand">{{val.commodityBrand}}</p>
                                      <p class="commodity-name">{{val.commodityName}}</p>
                                      <p class="commodity-specifications">规格：{{val.commoditySpecifications}}</p>
                                      <div class="clearfixed">
                                          <div class="commodity-price">
                                              <span class="commodity-new-price">{{val.newPrice}}</span>
                                              <span class="commodity-old-price">{{val.oldPrice}}</span></p>
                                          </div>
                                          <div class="commodity-count">
                                              <span class="residual-quantity" v-show="val.residualQuantity === 1">仅剩一件</span>
                                              <span class="residual-quantity" v-show="val.residualQuantity === 0">暂时缺货</span>
                                              <span class="residual-quantity" v-show="val.residualQuantity < val.buyQuantity">库存不足</span>
                                              <span class="purchase-quantity" >×{{val.buyQuantity}}</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="commodity-info" v-show="val.isEdit">
                                      <div class="specifications">
                                          <p>规格：</p>
                                          <drop-down :dropValue="specifications"></drop-down>
                                      </div>
                                      <div class="quantity">
                                          <p>数量：</p>
                                          <div class="num-wrapper">
                                              <span @click="chageProductCount(val,false)"><i class="icon icon-dis-subtract"></i></span>
                                              <input type="text" readonly v-model="val.buyQuantity">
                                              <span @click="chageProductCount(val,true)"><i class="icon icon-add"></i></span>
                                          </div>
                                          <!-- <num @buyNumber="changeCount" :count="val.buyQuantity"></num> -->
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- 结算  -->
      <div class="settlementBox clearfixed">
          <div class="productSettlement">
              <span class="checkedAll" @click="checkedAll()" >
                  <i class="icon" :class=" checkAllFlag ? 'icon-checkbox-pressed':'icon-checkbox-default'" @child-msg="checkedAll(checkAllFlag)"></i>全选</span>
                  <span class="totalMoney">总计：{{totalMoney}}</span>
          </div>
          <a href="JavaScript:;" class="settlement">立即结算</a>
      </div>
      <!-- 弹层  -->
      <div class="dialog" v-show="delFlag">
          <div class="md-overlay"  @click="delFlag=false"></div>
          <div class="md-modal">
              <div class="md-modal-inner">
                  <div class="md-top">
                      <p>提示</p>
                  </div>
                  <div class="md-content">
                      <div class="confirm-tips">
                          <p>确定删除这件商品吗?</p>
                      </div>
                  </div>
                  <div class="md-btn">
                      <a href="#" class="btn btn-cancel" @click="delFlag=false">取消</a>
                      <a href="#" class="btn btn-success" @click="delProduct()">确认</a>
                  </div>
                  <i class="icon icon-close" @click="delFlag=false"></i>
              </div>
          </div>

      </div>

  </div>
</template>

<script>
import Bus from '../../bus.js'
// import shoppingList from '../../components/shoppingList/shoppingList'
import dropDown from '../../components/dropdownBox/dropdownBox'
// import num from '../../components/num/num'
export default {
  data(){
      return{
          "shopProductList":[],
          "checkAllFlag":false,
          "totalMoney":0,
          "editIndex":0,
          "delFlag":false,
          "curProduct":'',
          "specifications":[
              {"name":"1中片刀中片刀"},
              {"name":"2中片刀中片刀"},
              {"name":"3中片刀中片刀"},
              {"name":"4中片刀中片刀"}
          ]
      }
  },
  watch:{
      // console.info()
  },
  mounted(){
      // 请求api
      this.$http.get('../../../static/data.json').then( res => {
          var  data=res.data.shopCartList.result.shopList;
          console.log(data)
          data.forEach(function(item){
              item.isEdit=false;
          })
          this.shopProductList = data;
      }).catch(error => {
      });
  },
  methods:{
    // 编辑
      editInfo(index){
          this.shopProductList[index].isEdit=true;
      },
      // 点击完成
      finished(index){
          this.shopProductList[index].isEdit=false;
      },
      // 单选
      checkcommodity(val){
          let _this = this;
          // 判断是否存在checked属性
          if(typeof val.checked == 'undefined'){
              // 局部注册监听变量 注册一个属性checked 默认为true
              this.$set(val,"checked",true);
          }else{
              val.checked = !val.checked;
          }
          // this.singleBoxIcon = !this.singleBoxIcon
          // console.log(this.singleBoxIcon)
          this.shopProductList.forEach(function(val,index){
              // 判断是否注册checked
              console.log(val.checked)
              if(!val.checked){
                  // 注册监听变量
                  _this.$set(val,"singleBoxIcon",false);
                  console.info(_this.singleBoxIcon)
                  _this.$emit("child-msg",_this.singleBoxIcon)
              }else{
                  // val.checked = !val.checked;
              }
         })
         this.calcTotalPrice()
     },
     // 编辑 选择商品数量
     chageProductCount(item,state){
         if(state&&item.buyQuantity<5){
            item.buyQuantity++
        }else if(!state&&item.buyQuantity>1){
            item.buyQuantity--
        }
         this.calcTotalPrice()
     },
      // 全选
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
          this.calcTotalPrice()
     },
     // 计算总价
     calcTotalPrice(){
         var _this = this;
         _this.totalMoney = 0;
         this.shopProductList.forEach(function(val,index){
             if(val.checked){
                 var newPrice = parseInt(val.newPrice);
                 var buyQuantity = parseInt(val.buyQuantity)
                 _this.totalMoney += newPrice * buyQuantity
                 console.log( _this.totalMoney)
             }
         })
     },
     // 删除
     delConfirme(val){
         this.delFlag = true;
         this.curProduct = val;
     },
     delProduct(){
         var proIndex = this.shopProductList.indexOf(this.curProduct);
         this.shopProductList.splice(proIndex,1);
         // 只是模拟删除
         this.delFlag=false
     }

  },
  components: {
      // shoppingList,
      // num,
     dropDown
  },


}
</script>
<style lang="less">
.dialog{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    .md-overlay{
        background-color: rgba(0,0,0,.6);
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 100;
        overflow-x: hidden;
        overflow-y: auto;
        min-width: 320px;
    }
    .md-modal{
        position: relative;
        background: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 240px;
        border-radius: 2.5px;
        z-index: 100;
        .md-modal-inner{
            .md-top{
                font-size: 16px;
                color: #333;
                line-height: 44px;
                height: 44px;
                width: 100%;
                text-align: center;
                border-bottom: 1px solid #999;
            }
            .md-content{
                padding:30px 20px;
                text-align: center;

            }
            .md-btn{
                font-size:0;
                a{
                    width: 50%;
                    height: 44px;
                    line-height: 43px;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                    border: 0;
                    border-top: 1px solid #999;
                    position: relative;
                    border-radius: 0;
                    font-size: 14px;
                    &.btn-cancel{
                        border-right: 1px solid #999;
                    }
                }
            }
            i{
                position: absolute;
                top: 15px;
                right: 10px;
            }
        }
    }
}


.num-wrapper{
    background: #fff;
    border: 1px solid #e1e1e1;
    width: 98px;
    height: 30px;
    span{
        float:left;
        width: 30px;
        display: inline-block;
        line-height: 28px;
        padding: 0 8px;
        i{
            vertical-align: middle;
        }
    }
    input{
        float:left;
        width: 36px;
        text-align: center;
        height: 28px;
        line-height: 28px;
        outline: none;
        border:none;
        font-size: 14px;
        color: #333333;
        letter-spacing: 0;
    }
}
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
                &.finished{
                    // display: none;
                    float:right;
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
</style>
