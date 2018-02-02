<template lang="html">
  <div class="plp-wrapper">
      <div class="conditionOption" ref="conditionOption" :class="filterFixed ? 'isFixed':'' " >
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
import product from "../product/product"
// 注意此悬顶效果在app上可能会出现抖动问题，请参考bug.text
export default {
    data(){
        return{
            "productList":[],
            "filterFixed":''
        }
    },
    created(){
        this.$http.get('../../../static/data.json')
        .then(res => {
            console.info(res.data.productList)
            this.productList = res.data.productList
        })
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll);
    },
    methods:{
        handleScroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let offsetTop = this.$refs.conditionOption.offsetTop
            // var offsetTop = document.querySelector('.condition-option').offsetTop
            if(scrollTop > offsetTop){
                this.filterFixed = true;
            }else{
                this.filterFixed = false;
            }
        },
    },
    destroyed () {
        console.log('离开')
      window.removeEventListener('scroll', this.handleScroll)
    },
    components:{
        product
    }
}

</script>

<style lang="less" scoped>
@import "plp.less";
</style>
