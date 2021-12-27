<template>
  <div id="app">
    <MainTabBar></MainTabBar>
    <router-view />
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
