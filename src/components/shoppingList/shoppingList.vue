<template lang="html">
    <div>
        <div class="shopart-list" v-for="(val,index) in shopProductList" :key="index">
            <div class="commodity-detail">
                <div class="commodity-editor clearfixed">
                    <span><i class="icon" :class=" val.checked ? 'icon-checkbox-pressed':'icon-checkbox-default'" @click="checkcommodity(val)"></i></span>
                    <span class="operation" v-show="noEdit">
                        <i class="icon icon-trash"></i>
                        <i class="icon icon-like"></i>
                        <i class="icon icon-edit" @click="editInfo(index)"></i>
                    </span>
                    <span class="operation" v-show="!noEdit" @click="editInfo(index)">完成</span>
                </div>
                <div class="commodity-box clearfixed">
                    <div class="commodity-img">
                        <a href="#">
                            <img :src="val.productImage" alt="">
                        </a>
                    </div>
                    <div class="commodity-info" v-show="noEdit">
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
                                <span class="purchase-quantity">×{{val.buyQuantity}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="commodity-info" v-show="!noEdit">
                        <div class="specifications">
                            <p>规格：</p>
                            <drop-down :dropValue="specifications"></drop-down>
                        </div>
                        <div class="quantity">
                            <p>数量：</p>
                            <num :count="val.buyQuantity"></num>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bus from '../../bus.js'
import dropDown from '../../components/dropdownBox/dropdownBox'
import num from '../../components/num/num'
export default {
    props:['shopProductList','checkAllFlag'],
    data(){
        return{
            "noEdit":true,
            // props不可修改 用watch监听
            "singleBoxIcon":this.checkAllFlag,
            "specifications":[
                {"name":"1中片刀中片刀"},
                {"name":"2中片刀中片刀"},
                {"name":"3中片刀中片刀"},
                {"name":"4中片刀中片刀"}
            ]
        }
    },
    // filters:{
    //     formatMoney(val){
    //         return "￥"+val.tofixed(2)
    //     }
    // },
    created(){


    },
    // mounted(){
    //     this.singleBoxIcon = this.checkAllFlag
    //     console.log(this.singleBoxIcon)
    // },
    watch:{
        checkAllFlag(val){
            this.singleBoxIcon = val
        }
    },
    methods:{
        // 编辑
        editInfo(index){
            this.noEdit= !this.noEdit
        },
        // 选择单个商品
        checkcommodity(val){
            let _this = this;
            if(typeof val.checked == 'undefined'){
                // 注册监听变量
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
                    console.log(123)
                    // 注册监听变量
                    _this.$set(val,"singleBoxIcon",false);
                    console.info(_this.singleBoxIcon)
                    _this.$emit("child-msg",_this.singleBoxIcon)
                }else{
                    // val.checked = !val.checked;
                }
           })
        }
    },
    components:{
        num,
        dropDown
    }
}
</script>

<style lang="less">
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
