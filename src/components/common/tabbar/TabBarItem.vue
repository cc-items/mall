<template>
  <div class="tab-bar-item" @click="clickTabBar">
    <div v-if="!isShow">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="isActive">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabBarItem",
  props: {
    path: {
      type: String,
      default: "/home",
    },
    active: {
      type: String,
      default: '#67d0ec'
    }
  },
  data() {
    return {};
  },

  computed: {
    isShow() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    isActive() {
      return this.isShow ? {color: this.active} : {}
    }
  },
  methods: {
    clickTabBar() {
      this.$router.push(this.path)
    },
  },
};
</script>
<style scoped lang="scss">
.tab-bar-item {
  /* flex项目的属性,项目的长度是一样的 */
  flex: 1;
  img {
    width: 1.5rem;
  }
}
</style>
