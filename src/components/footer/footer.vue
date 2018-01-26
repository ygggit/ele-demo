<template lang="html">
    <div class="footer">
        <div class="log-register-box clearfixed">
            <div class="">
                <a href="#">
                    <i class="icon icon-login"></i>登录/注册
                </a>
            </div>
            <div class="">
                <a href="#">
                    <i class="icon icon-service"></i>在线客服
                </a>
            </div>
        </div>
        <div class="subscribe-mail">
            <p>订阅邮件时刻关注双立人最新资讯</p>
            <div class="form-box">
                <div class="form-input">
                    <input type="text" name="" value="" placeholder="请输入您的邮箱地址">
                    <a href="">立即订阅</a>
                </div>
                <div class="msg-block">
                    <span>电邮地址格式错误</span>
                </div>
            </div>
        </div>
        <div class="attention-us">
            <span>关注我们</span>
            <a href="#">
                <i class="icon icon-wechat"></i>
                <i class="icon icon-weibo"></i>
            </a>
        </div>
        <div class="footer-help-box">
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
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            "isActiveIndex":"",
            "helpList":[
                {
                    "listName":"购买帮助",
                    "isShow":false,
                    "secondList":[
                        {
                            "name":"常见问题"
                        },
                        {
                            "name":"支付&配送"
                        },
                        {
                            "name":"退货政策"
                        }
                    ]
                },
                {
                    "listName":"查询信息",
                    "isShow":false,
                    "secondList":[
                        {
                            "name":"服务条款"
                        },
                        {
                            "name":"会员制度"
                        },
                        {
                            "name":"订单查询"
                        }
                    ]
                },
                {
                    "listName":"线下门店",
                    "isShow":false,
                    "secondList":[]
                }
            ]
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

<style lang="less">
@import 'footer.less';
</style>
