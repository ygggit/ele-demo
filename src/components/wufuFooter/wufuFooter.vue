<template lang="html">
  <div class="footer">
  	<div class="footer-wrapper">
        <div class="footer-container float-clearfixed">
            <div class="footer-container-left float-clearfixed">
                <div v-for="(val,index) in list" :key="index">
                    <h2>{{val.titie}}</h2>
                    <ul>
                        <li v-for="(valItem,valIndex) in val.content" :key="valIndex">
                            <a href="#">{{valItem.name}}</a>
                        </li>
                    </ul>
                </div>
                <!-- <div>
                    <h2>安全保障</h2>
                    <ul>
                        <li><a href="#">信息披露</a></li>
                        <li><a href="#">平台公告</a></li>
                        <li><a href="#">法律监管</a></li>
                    </ul>
                </div>
                <div>
                    <h2>帮助中心</h2>
                    <ul>
                        <li><a href="#">新手指南</a></li>
                        <li><a href="#">常见问题</a></li>
                        <li><a href="#">联系客服</a></li>
                    </ul>
                </div> -->
            </div>
            <div class="footer-container-right">
                <div>
                    <h1 class="phone">400-992-5856</h1>
                    <p class="time">周一至周五（9:30-18:00）</p>
                </div>
                <div class="">
                    <ul>
                        <li>
                            <p>五福贷服务号</p>
                            <img src="../../../static/wufuheader/fuwuhao.png"/>
                        </li>
                        <li>
                            <p>五福贷订阅号</p>
                            <img src="../../../static/wufuheader/dingyuehao.png"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright float-clearfixed">
            <ul>
                <li>
                    <a href="#">
                        <img src="../../../static/wufuheader/cnnic.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../../../static/wufuheader/cert.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../../../static/wufuheader/getseal.png" alt="">
                    </a>
                </li>
            </ul>
            <p>上海中融资产管理有限公司 版权所有    Copyright@2017 wufumoney.com,All Rights Reserved   沪ICP备15042800号-2    市场有风险 出借需谨慎</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    "titie":"关于我们",
                    "content":[
                        {
                            "name":"团队介绍"
                        },
                        {
                            "name":"联系我们"
                        },
                        {
                            "name":"人才招聘"
                        },
                    ]
                },{
                    "titie":"安全保障",
                    "content":[
                        {
                            "name":"信息披露"
                        },
                        {
                            "name":"平台公告"
                        },
                        {
                            "name":"法律监管"
                        },
                    ]
                },{
                    "titie":"帮助中心",
                    "content":[
                        {
                            "name":"新手指南"
                        },
                        {
                            "name":"常见问题"
                        },
                        {
                            "name":"联系客服"
                        },
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="less">
@import 'wufuFooter.less';
</style>
