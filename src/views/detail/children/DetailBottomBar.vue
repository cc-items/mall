<template>
  <div id="bottom-bar">
    <div class="left">
      <div class="service">
        <img src="~assets/img/detail/icon01.png" alt="service" />
        <div>客服</div>
      </div>
      <div class="shop">
        <img src="~assets/img/detail/icon02.png" alt="shop" />
        <div>店铺</div>
      </div>
      <div class="collection">
        <img src="~assets/img/detail/icon03.png" alt="collection" />
        <div>收藏</div>
      </div>
    </div>
    <div class="right">
      <div  @click="addToCart">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom-bar",
  props: {},
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {
    addToCart() {
      this.$emit('add-to-cart')
    }
  },
  components: {},
  filters: {},
};
</script>

<style scoped lang="scss">
#bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  display: flex;
  background: #f6f6f6;
  .left {
    display: flex;
    flex: 2;
    align-items: center;
     text-align: center;
    img {
      width: 35%;
    }
    .service {
      flex: 1;
    }
    .shop {
      flex: 1;
    }
    .collection {
       flex: 1;
    }
  }
  .right {
    display: flex;
    flex: 2;
    text-align: center;
    div:nth-child(1) {
      flex: 1;
      height: 49px;
      line-height: 49px;
      background: #ffdc08;
    }
    div:nth-child(2) {
      flex: 1;
      height: 49px;
      line-height: 49px;
      background: #ff6d91;
    }
  }
}
</style>
