<template>
  <!-- 不确定的东西太多时使用插槽,如果是固定的不使用插槽 -->
  <div class="tab-controll">
    <div
      class="tab-controll-text"
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index == currentIndex }"
      @click="clickActive(index)"
    >
      <span>{{ item }}</span>
    </div>
    <div class="tab-controll-image">
      <slot name="image"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabControll",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
    path: {
      type: String,
    },
    active: {
      type: String,
      default: "#ff0000",
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  created() {},
  computed: {},
  methods: {
    clickActive(index) {
      this.currentIndex = index;
    },
  },
  components: {},
  filters: {},
};
</script>

<style scoped lang="scss">
.tab-controll {
  display: flex;
  width: 100%;
  background: #fff;
  text-align: center;
  .tab-controll-text {
    // 只对离得最近的项目有用;
    flex: 1;
    width: 100%;
  }
}
.active {
  color: #ff9eac;
}

.active span {
  padding: 5px;
  border-bottom: 5px solid #ff9eac;
}
</style>
