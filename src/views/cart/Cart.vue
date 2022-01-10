<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <template v-slot:center>
        <span>购物车({{ cartListLength }})</span>
      </template>
    </nav-bar>
    <scroll class="wrap" ref="scroll">
      <div class="cart-top">
        <cart-item
          v-for="(item, index) in cartList"
          :key="index"
          :cart-list-item="item"
        ></cart-item>
      </div>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import CartItem from "./cartChildren/CartItem";
import CartBottomBar from './cartChildren/CartBottomBar'
import { mapGetters, mapState } from "vuex";
export default {
  name: "cart",
  props: {},
  data() {
    return {};
  },
  created() {},
  activated() {
    this.$nextTick(() => {
      this.$refs.scroll.refesh();
    });
  },
  // 仅可以监听响应式数据的变化.
  computed: {
    // 普通写法
    /*cartList() {
      return this.$store.getters.cartList
    }*/
    //简写
    ...mapGetters(["cartListLength"]),
    ...mapState(["cartList"]),
  },
  methods: {},
  components: {
    NavBar,
    Scroll,
    CartItem,
    CartBottomBar
  },
  filters: {},
};
</script>

<style scoped lang="scss">
#cart {
  position: relative;
  height: 100vh;
  .cart-nav {
    background: #ff7f89;
  }
  .wrap {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 89px;
    overflow: hidden;
  }
  .cart-top {
    margin-top: 15px;
  }
}
</style>
