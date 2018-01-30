<template lang="html">
    <ul>
        <li v-for="(val,index) in helpList" :key="index" :class="{'open':val.isShow && index === isActiveIndex}">
            <a href="javascript:;" @click="toggle(val,index)">
                {{val.listName}}
                <i class="icon" :class=" val.isShow && index === isActiveIndex ? 'icon-hide':'icon-open'" v-if="val.secondList.length>0"></i>
                <i class="icon icon-arrow-left" v-else></i>
            </a>
            <ul>
                <li v-for="(childVal,index) in val.secondList" :key="index">
                    <a>{{childVal.name}}</a>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    props:['helpList'],
    data(){
        return{

        }
    },
    methods:{
        toggle(val,index){
            let that = this;
            that.isActiveIndex = index;
            for(let[itemIndex,item] of that.helpList.entries()){
                // console.info(index,'名称')
                // console.info(item,'值')
                // console.info(index)
                if(itemIndex === index){
                    console.log(1)
                    item.isShow = !item.isShow;
                    console.log(item.isShow)
                }else{
                    console.log(2)
                    item.isShow = false
                }
            }
            // console.info(val.isShow && index === that.isActiveIndex)
        }
    }
}
</script>

<style lang="css">
</style>
