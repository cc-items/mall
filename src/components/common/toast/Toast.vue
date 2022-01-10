<template>
  <div class="toast" v-show="isShow">
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "toast",
  props: {},
  data() {
    return {
      isShow: false,
      message: "",
    };
  },
  created() {},
  computed: {},
  methods: {
    show(message, duration = 1000) {
      this.message = message;
      this.isShow = true;
      console.log(1)
      setTimeout(() => {
        this.isShow = false
      }, duration);
    },
  },
};
</script>

<style scoped lang="scss">
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 999;
  padding: 5px;
  background: #e2dfda;
  border-radius: 10px;
  // 移动自身元素的50%的距离.
  transform: translate(-50%, -50%);
}
</style>
