<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      betterScroll: null,
    };
  },
  mounted() {
    //监听content:Dom的尺寸的变化;
     this.betterScroll = new BetterScroll(this.$refs.wrapper, {
        observeDOM: true,
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
     });
     this.betterScroll.on('scroll',(position) => {
       this.$emit('scroll',position)
     }),
      this.betterScroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
  },
  methods: {
    scrollTo(x,y,time=1000) {
      this.betterScroll.scrollTo(x,y,time)
    },
    finishPullUp() {
      this.betterScroll.finishPullUp();
    }
  }
};
</script>

<style lang="scss" scoped>
// 会影响父元素的样式.content {}
</style>
