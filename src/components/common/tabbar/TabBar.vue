<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  props: {},
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">

  #tab-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    width: 100%;
    height: 3.0625rem;
    text-align: center;
    background: $bgc-color;
  }
</style>
