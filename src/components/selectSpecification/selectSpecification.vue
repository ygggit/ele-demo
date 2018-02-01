<template lang="html">
    <div class="specification-content">
        <ul>
            <li v-for="(val,index) in specification" :key="index" :class="{'active':index ===selectedIndex}" @click="change(index)">
                <span>{{val.name}}</span>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    props:["specification"],
    data(){
        return{
            "selectedIndex":0
        }
    },
    methods:{
        change(index){
            this.selectedIndex = index;
        }
    }
}
</script>

<style lang="less">
.specification-content{
    ul{
        font-size:0;
        li{
            display: inline-block;
            min-width:97px;
            border:1px solid #e1e1e1;
            text-align: center;
            margin-right:12px;
            span{
                display: inline-block;
                font-size: 14px;
                color: #333333;
                letter-spacing: 0;
                padding:5px 0;
            }
            &.active{
                border: 1px solid #EE1D25;
            }
        }
    }
}
</style>
