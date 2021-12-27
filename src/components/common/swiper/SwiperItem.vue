<template>
  <div class="swiper-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sweperItem",
  props: {},
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
  .swiper-item {
    width: 100%;
    flex-shrink: 0;
    img {
      width: 100%;
    }
  }
</style>
