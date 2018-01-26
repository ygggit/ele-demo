<template lang="html">
  <div class="plp-wrapper">
      <div class="condition-option" :class="filter-fixed">
          <ul class="clearfixed">
              <li>
                  <span>筛选条件<i class="down-menu"></i></span>
              </li>
              <li>
                  <span>排序<i class="down-menu"></i></span>
              </li>
          </ul>
      </div>
      <div class="product-plp-box">
          <div class="product-style">
              刀具(1,142)
          </div>
          <product :productList="productList"></product>
      </div>
  </div>
</template>

<script>
import product from "../../components/product/product"
export default {
    data(){
        return{
            "productList":[]
        }
    },
    created(){
        this.$http.get('../../../static/data.json')
        .then(res => {
            console.info(res.data.productList)
            this.productList = res.data.productList
        })
    },
    components:{
        product
    }
}
</script>

<style lang="less" scoped>
@import "plp.less";
</style>
