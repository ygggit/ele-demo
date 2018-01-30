<template lang="html">
    <div class="star">
        <span class="star-item" v-for="(itemClass,index) in itemClasses" :key="index">
            <i class="icon" :class="itemClass"></i>
        </span>
    </div>
</template>

<script>
const length = 5;
const star = 'icon-star';
const half = 'icon-half-star';
const star1 = 'icon-star1';
const half1 = 'icon-half-star1';
export default {
    props: {
      score: {
        type: Number
      }
    },
    data(){
        return{

        }
    },
    computed:{
        itemClasses(){
            console.log(this.score)
            let result = [];
            let score = Math.floor(this.score * 2) / 2;
            let hasDecimal = score % 1 !== 0;
            // console.info(hasDecimal)
            let integer = Math.floor(score);
            for (let i = 0; i < integer; i++) {
              result.push(star);
            }
            if (hasDecimal) {
              result.push(half);
            }
            while (result.length < length) {
              result.push(half1);
            }
            return result;
            console.log(result)
        }
    }
}
</script>

<style lang="less" scoped>
.star{
    font-size: 0;
    .star-item{
        display: inline-block;
        background-repeat: no-repeat;
        i{

        }
    }
}
</style>
