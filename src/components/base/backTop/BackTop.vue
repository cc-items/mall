<template>
  <div class="back-top" v-on="inputListeners">
    <img src="~assets/img/arrow.svg" alt="backTop" />
  </div>
</template>
<script>
export default {
  name: "backTo",
  props: {},
  data() {
    return {};
  },
  created() {},
  computed: {
    inputListeners() {
      const vm = this;
      return Object.assign({}, this.$listeners, {
        click(event) {
          vm.$emit("click");
        },
      });
    },
  },
  methods: {

  },
};
</script>
<style scoped lang="scss">
.back-top {
  position: fixed;
  right: 8px;
  bottom: 55px;
  z-index: 10;
  width: 8%;
  img {
    width: 100%;
    background: #f6f6f6;
    border-radius: 15px;
  }
}
</style>
