<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "navBar",
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>
<style scoped lang="scss">
  .nav-bar {
    display: flex;
    width: 100%;
    height: calc(44rem / 16);
    line-height: calc(44rem / 16);
    box-shadow: 0 2px 2px rgba(100, 100, 100,0.1);


    .center {
      flex: 1;
      display: flex;
      justify-content: space-around;
      text-align: center;
    }
  }
</style>
