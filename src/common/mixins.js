import BackTop from "components/base/backTop/BackTop.vue";
export const imageLoadMixin = {
  // 解决组件之间的重复功能||重复代码的抽离.
  beforeRouteLeave(to, from, next) {
    this.$off("loadImage", this.loadImage);
    next();
  },
};

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    };
  },
  components: {
    BackTop,
  },
  methods: {
    clickBackTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    showBackTop(position) {
      this.isShowBackTop = -position.y > 500;
    },
  },
};
