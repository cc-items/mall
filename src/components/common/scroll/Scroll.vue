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
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      betterScroll: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      //监听content:Dom的尺寸的变化;
      this.betterScroll = new BetterScroll(this.$refs.wrapper, {
        observeDOM: true,
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      });
      if (this.probeType === 2 || this.probeType === 3) {
        this.betterScroll.on("scroll", (position) => {
          this.$emit("scroll", position);
        });
      }
      if (this.pullUpLoad) {
        this.betterScroll.on("pullingUp", () => {
          this.$emit("pullingUp");
          // this.$bus.$emit('load')
        });
      }
    });
  },
  methods: {
    scrollTo(x, y, time = 1000) {
      this.betterScroll && this.betterScroll.scrollTo &&this.betterScroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.betterScroll.finishPullUp();
    },
    refesh() {
      // this.betterScroll初始化完成时执行该方法.
      this.betterScroll && this.betterScroll.refresh();
    },
    scrollY() {
      return this.betterScroll.y ? this.betterScroll.y : 0;
    },
    scrollBy(x, y) {
      this.betterScroll && this.betterScroll.scrollBy(x, y);
    },
  },
};
</script>

<style lang="scss" scoped>
// 会影响父元素的样式.content {}
</style>
