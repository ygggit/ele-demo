<template lang="html">
    <div class="dropdownWrapper">
        <div class="drop-btn" @click="toggleChange">
            <span>{{dropValue[selectedIndex].name}}</span>
            <i class="icon" :class=" dropMenuShow ?'icon-up-defalt':'icon-down-defalt'"></i>
        </div>
        <div class="menu-list" v-show="dropMenuShow">
            <ul>
                <li v-for="(val,index) in dropValue" :key="index" @click="selectedVal(index)">{{val.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:['dropValue'],
    data(){
        return{
            "dropMenuShow":false,
            "selectedIndex":0
        }
    },
    methods:{
        toggleChange(){
            let me = this;
            me.dropMenuShow = !me.dropMenuShow;
        },
        selectedVal(index){
            this.selectedIndex = index;
            this.dropMenuShow = false;
        }
    }
}
</script>

<style lang="less">
.dropdownWrapper{
    position: relative;
    .drop-btn{
        width:140px;
        height:30px;
        border: 1px solid #E1E1E1;
        padding:0 30px 0 8px;
        line-height: 30px;
        position: relative;
        i{
            position: absolute;
            top: 12px;
            right:10px;
        }
    }
    .menu-list{
        position: absolute;
        top: 30px;
        left:0;
        width:100%;
        background:#fff;
        border-bottom:1px solid #E1E1E1;
        ul{
            max-height: 90px;
            overflow: scroll;
            li{
                height:30px;
                line-height: 30px;
                padding:0 12px;
                border-left: 1px solid #E1E1E1;
                border-right: 1px solid #E1E1E1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>
