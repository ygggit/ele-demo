<template lang="html">
      <div class="returnTop" ref="returnTop" @click="backTop" v-show='isShow'>
          <i class="icon icon-return-top"></i>
      </div>
</template>

<script>
export default {
  name: 'BackTop',
  props: {
    scrollmyself: {
      type: Boolean, // 这是选择滚动对象的props值，如果滚动的对象是当前组件的父元素，就设置scrollObj为true.如果没有设置就默认为window对象
      default: false
    }
  },
  data() {
    return {
      "isShow": false,
      "top":''

    }
  },
  methods: {
    // backTop(){
    // let scrollTop = document.body.scrollTop  || document.documentElement.scrollTop ;
    //      document.body.scrollTop = document.documentElement.scrollTop = 0;
    // },
    showIcon() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 100) {
        this.isShow = true
      } else if (scrollTop < 100) {
        this.isShow = false
      }
    },
    backTop() {
      let timer = setInterval(() => {
         var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
          currentPosition -= 50;
          if (currentPosition > 0) {
            window.scrollTo(0, currentPosition);
          }
          else {
            window.scrollTo(0, 0);
            clearInterval(timer);
            timer = null;
          }
      }, 10)
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.showIcon, false);
    });
  },
  beforeDestroy() {
    //  组件销毁的时候，需要删除scroll的监听事件。
    window.removeEventListener('scroll', this.showIcon)
  }
}
</script>

<style lang="less">

.returnTop {
    position: fixed;
    bottom: 120px;
    right: 12px;
    z-index: 10;
}
</style>
