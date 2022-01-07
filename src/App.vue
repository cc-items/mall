<template>
  <div id="app">
    <MainTabBar></MainTabBar>
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from "components/base/maintabbar/MainTabBar.vue";

export default {
  data() {
    return {};
  },
  components: {
    MainTabBar,
  },
};
</script>

<style lang="scss">
// @import "./assets/css/base.scss";
</style>
