<template>
  <div class="checked">
    <div class="item-checkbox">
      <img
        src="~assets/img/detail/check_active.png"
        alt="checkbox"
        v-show="isShowImage"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "checked",
  props: {
    isShowImage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  components: {},
  filters: {},
};
</script>

<style scoped lang="scss">
.checked {
  height: inherit;
  width: 10%;
  .item-checkbox {
    position: relative;
    // z-index: 10;
    width: 22px;
    height: 22px;
    border: 1px solid #a6a6a6;
    border-radius: 11px;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
  }
}
</style>
