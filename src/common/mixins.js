export const imageLoadMixin = {
  // 解决组件之间的重复功能||重复代码的抽离.
  beforeRouteLeave(to, from, next) {
    this.$off("loadImage", this.loadImage);
    next();
  }
};
