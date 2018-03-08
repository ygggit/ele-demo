<template lang="html">
  <div class="num-wrapper">
      <span @click="reduce"><i class="icon icon-dis-subtract"></i></span>
      <input type="text" name="" v-model="countValue" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
      <span @click="add"><i class="icon icon-add"></i></span>
  </div>
</template>

<script>
export default {
    props:['count'],
    data(){
        return{
            type:Number,
            countValue:this.count
        }
    },
    methods:{
        reduce(){
            let count;
            if(!this.countValue || this.countValue == 1){
                this.$set(this,'countValue', 1)
            }else{
                this.countValue--;
            }
        },
        add(){
            if(!this.countValue){
                this.$set(this,'countValue', 1)
            }else{
                this.countValue++;
            }
        }
    },
    watch:{
        countValue(val){
            this.countValue = val
            this.$emit('buyNumber',this.countValue);
        }
    }
}
</script>

<style lang="less">
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
</style>
