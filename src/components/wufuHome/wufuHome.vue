<template lang="html">
    <div class="containerWraper">
        <!-- banner -->
        <div class="banner-wrapper">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide>
                    <a href="/wufuIndex.html">
                        <img src="../../../static/wufuheader/banner1.png" alt="">
                    </a>
                </swiper-slide>
                <swiper-slide>
                    <a href="/wufuIndex.html">
                        <img src="../../../static/wufuheader/banner1.png" alt="">
                    </a>
                </swiper-slide>
                <swiper-slide>
                    <a href="/wufuIndex.html">
                        <img src="../../../static/wufuheader/banner1.png" alt="">
                    </a>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
        <!-- 合规 -->
        <div class="compliance-wrapper">
            <div class="compliance-container">
                <div class="compliance-box">
                    <ul>
                        <li class="float-clearfixed">
                            <div>
                                <img src="../../../static/wufuheader/jian.png"/>
                            </div>
                            <div class="compliance-text">
                                <h3>银行存管</h3>
                                <p>厦门国际银行资金监管</p>
                            </div>
                        </li>
                        <li class="float-clearfixed">
                            <div>
                                <img src="../../../static/wufuheader/gui.png"/>
                            </div>
                            <div class="compliance-text">
                                <h3>银行存管</h3>
                                <p>厦门国际银行资金监管</p>
                            </div>
                        </li>
                        <li class="float-clearfixed">
                            <div>
                                <img src="../../../static/wufuheader/kong.png"/>
                            </div>
                            <div class="compliance-text">
                                <h3>银行存管</h3>
                                <p>厦门国际银行资金监管</p>
                            </div>
                        </li>
                        <li class="float-clearfixed">
                            <div>
                                <img src="../../../static/wufuheader/quan.png"/>
                            </div>
                            <div class="compliance-text">
                                <h3>银行存管</h3>
                                <p>厦门国际银行资金监管</p>
                            </div>
                        </li>
                    </ul>
                    <div class="accumulative">
                        <ul>
                            <li>
                                <a href="#">累计注册人数:<span>99,999,99</span>人</a>
                            </li>
                            <li>
                                <a href="#">累计交易总额:<span>99,999,99</span>元</a>
                            </li>
                            <li>
                                <a href="#">客户累计收益:<span>99,999,99</span>元</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="notice">
                    <a href="#" target="_blank">
                        <i class="icon icon-notice"></i>
                        <span>【重要通知】</span>
                        <span class="notice-content">微贷网2018年五一劳动节放假公告.运营平台进行服务器升级,将暂停服务.</span>
                        <span>【2017-02-21】</span>
                    </a>
                </div>
                <div class="mark-wrapper float-clearfixed">
                    <div class="mark-img">
                        <img src="../../../static/wufuheader/img.png" alt="">
                    </div>
                    <div class="mark-box">
                        <ul>
                            <li>
                                <div class="mark">
                                    <h3 class="mark-title"><a href="">体验标</a></h3>
                                    <div class="mark-container float-clearfixed">
                                        <div class="mark-rate">
                                            <span>9<em>%</em></span>
                                            <p>预期年化收益率</p>
                                        </div>
                                        <div class="mark-day">
                                            <span>30<em>天</em></span>
                                            <p>服务期限</p>
                                        </div>
                                        <div class="mark-btn">
                                            <a href="#">立即出借</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="mark">
                                    <h3 class="mark-title"><a href="">新手标</a></h3>
                                    <div class="mark-container float-clearfixed">
                                        <div class="mark-rate">
                                            <span>9<em>%</em></span>
                                            <p>预期年化收益率</p>
                                        </div>
                                        <div class="mark-day">
                                            <span>30<em>天</em></span>
                                            <p>服务期限</p>
                                        </div>
                                        <div class="mark-btn">
                                            <a href="#">立即出借</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="uploader-img">
                        <img src="../../../static/wufuheader/app-uplode.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 活动 -->
        <div class="activity-wrapper float-clearfixed">
            <div class="active-left">
                <img src="../../../static/wufuheader/active-1.png" alt="" ref="mybox" :class="{'move':flag===1}" @mouseenter="moveEnter($event)" @mouseleave="moveLeave($event)">
            </div>
            <div class="active-right">
                <div class="">
                    <img src="../../../static/wufuheader/active-2.png" alt="" :class="{'move':flag===1}" @mouseenter="moveEnter($event)" @mouseleave="moveLeave($event)">
                </div>
                <div class="">
                    <img src="../../../static/wufuheader/active-3.png" alt="" :class="{'move':flag===1}" @mouseenter="moveEnter($event)" @mouseleave="moveLeave($event)">
                </div>
            </div>
        </div>
        <!-- 福计划  散标-->
        <div class="blessing-scatter">
            <div class="blessing-scatter-container float-clearfixed">
                <!--福计划 -->
                <div class="blessing-plan">
                    <div class="blessing-plan-item">
                        <div>
                            <img src="../../../static/wufuheader/fu-paln.png"/>
                            <div>
                                <p><em>6</em>% ~ <em>8</em>% 平均历史年化收益率</p>
                                <p>出借资金不闲置,智能投标更省心</p>
                                <a href="#">立即加入</a>
                            </div>
                        </div>
                    </div>
                    <div class="blessing-plan-item">
                        <div>
                            <img src="../../../static/wufuheader/fu-change.png"/>
                            <div>
                                <p><em>6</em>% ~ <em>8</em>% 平均历史年化收益率</p>
                                <p>灵活转让有保障,操作便捷高回报</p>
                                <a href="#">立即加入</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 散标 -->
                <div class="scatter-standard">
                    <div class="scatter-standard-item">
                        <div>
                            <img src="../../../static/wufuheader/san.png"/>
                            <div>
                                <p><em>6</em>% ~ <em>8</em>% 平均历史年化收益率</p>
                                <p>出借资金不闲置,智能投标更省心</p>
                                <a href="#">立即加入</a>
                            </div>
                        </div>
                    </div>
                    <div class="scatter-standard-item">
                        <div>
                            <img src="../../../static/wufuheader/san-change.png"/>
                            <div>
                                <p><em>6</em>% ~ <em>8</em>% 平均历史年化收益率</p>
                                <p>灵活转让有保障,操作便捷高回报</p>
                                <a href="#">立即加入</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- 公司新闻 -->
        <div class="company-news-wrapper">
            <div class="company-news-container float-clearfixed">
                <div class="company-news-items float-clearfixed">
                    <div class="news-img">
                        <img src="../../../static/wufuheader/news-1.png" alt="">
                    </div>
                    <div class="news-text">
                        <h2><a>媒体报道<i class="icon icon-news-more"></i></a></h2>
                        <ul>
                            <li>
                                <a href="#">
                                    <p class="text">逆袭！银行理财产品暴跌20%,投资者银行产品银行产品银行产品</p>
                                    <p class="time">2018-09-21</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p class="text">逆袭！银行理财产品暴跌20%,投资者银行产品银行产品银行产品</p>
                                    <p class="time">2018-09-21</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p class="text">逆袭！银行理财产品暴跌20%,投资者银行产品银行产品银行产品</p>
                                    <p class="time">2018-09-21</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p class="text">逆袭！银行理财产品暴跌20%,投资者银行产品银行产品银行产品</p>
                                    <p class="time">2018-09-21</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="company-news-items float-clearfixed">
                    <div class="news-img">
                        <img src="../../../static/wufuheader/news-2.png" alt="">
                    </div>
                    <div class="news-text">
                        <h2><a>公司新闻<i class="icon icon-news-more"></i></a></h2>
                        <ul>
                            <li>
                                <a href="#">
                                    <p class="text">逆袭！银行理财产品暴跌20%,投资者银行产品银行产品银行产品</p>
                                    <p class="time">2018-09-21</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p class="text">逆袭！银行理财产品暴跌20%,投资者银行产品银行产品银行产品</p>
                                    <p class="time">2018-09-21</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p class="text">逆袭！银行理财产品暴跌20%,投资者银行产品银行产品银行产品</p>
                                    <p class="time">2018-09-21</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p class="text">逆袭！银行理财产品暴跌20%,投资者银行产品银行产品银行产品</p>
                                    <p class="time">2018-09-21</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- 合作伙伴 -->
        <div class="cooperative-partner">
            <h2><span>合作伙伴</span></h2>
            <div class="partner-img">
                <ul>
                    <li v-for="(val,index) in partnerImg" :key="index" @mouseenter="showActive(index)" @mouseleave="hideActive()">
                        <img :src="val.imgUrl" alt="">
                        <img :src="val.imgUrlActive" alt="" class="active-img" v-show="activeImg === index">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    data(){
        return{
            flag:0,
            activeImg:'',
            swiperOption:{
                loop:true,
                notNextTick:true,
                paginationClickable: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            partnerImg:[
                {
                    "imgUrl":"../../../static/wufuheader/partner1.png",
                    "imgUrlActive":"../../../static/wufuheader/partner1-active.png"
                },
                {
                    "imgUrl":"../../../static/wufuheader/partner2.png",
                    "imgUrlActive":"../../../static/wufuheader/partner2-active.png"
                },
                {
                    "imgUrl":"../../../static/wufuheader/partner3.png",
                    "imgUrlActive":"../../../static/wufuheader/partner3-active.png"
                },
                {
                    "imgUrl":"../../../static/wufuheader/partner4.png",
                    "imgUrlActive":"../../../static/wufuheader/partner4-active.png"
                },
                {
                    "imgUrl":"../../../static/wufuheader/partner5.png",
                    "imgUrlActive":"../../../static/wufuheader/partner5-active.png"
                },
                {
                    "imgUrl":"../../../static/wufuheader/partner6.png",
                    "imgUrlActive":"../../../static/wufuheader/partner6-active.png"
                },
                {
                    "imgUrl":"../../../static/wufuheader/partner7.png",
                    "imgUrlActive":"../../../static/wufuheader/partner7-active.png"
                },
                {
                    "imgUrl":"../../../static/wufuheader/partner8.png",
                    "imgUrlActive":"../../../static/wufuheader/partner8-active.png"
                },
                {
                    "imgUrl":"../../../static/wufuheader/partner9.png",
                    "imgUrlActive":"../../../static/wufuheader/partner9-active.png"
                },
                {
                    "imgUrl":"../../../static/wufuheader/partner10.png",
                    "imgUrlActive":"../../../static/wufuheader/partner10-active.png"
                }
            ]
        }
    },
    components:{
        swiper,
        swiperSlide
    },
    computed:{
         // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
        swiper() {
            return this.$refs.mySwiper.swiper
            console.info(this.$refs.mySwiper.swiper)
        }
    },
    methods:{
        moveEnter(e){
            // const self = this;
            // this.$refs.mybox.style.border = '1px solid red';
             e.target.setAttribute("class",'move');
            //this.flag = 1
        },
        moveLeave(e){
            // const self = this;
            // this.$refs.mybox.style.border = '0px solid red';
            // this.flag = 0
            e.target.removeAttribute("class");
        },
        showActive(index){
            this.activeImg = index;
        },
        hideActive(index){
            this.activeImg = '';
        }
    }
}
</script>

<style lang="less">
@import 'wufuHome.less';
</style>
