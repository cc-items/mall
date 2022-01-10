<template>
  <div id="cart-bottom-bar">
    <div class="check-all">
      <checked
        class="check"
        :is-show-image="isAllSelected"
        @click.native="clickChecked"
      ></checked>
      <span>全选</span>
    </div>
    <div class="total">
      <span>合计:¥{{ totalPrice.toFixed(2) }}</span>
    </div>
    <div class="payoff">
      <span>去结算({{ total }})</span>
    </div>
  </div>
</template>

<script>
import Checked from "./Checked.vue";
import { mapGetters, mapState } from "vuex";
export default {
  name: "cartBottomBar",
  props: {},
  data() {
    return {};
  },
  created() {},
  computed: {
    totalPrice() {
      return this.$store.getters.filterChecked.reduce((total, item, index) => {
        return (total += item.count * item.price);
      }, 0);
    },
    ...mapGetters({
      total: "filterCheckedLength",
    }),
    ...mapState(["cartList"]),
    isAllSelected() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.find((item) => {
        return !item.checked;
      });
    },
  },
  methods: {
    clickChecked() {
      if (this.isAllSelected) {
        this.cartList.forEach((item) => {
          item.checked = false;
        });
      } else {
        this.cartList.forEach((item) => {
          item.checked = true;
        });
      }
    },
  },
  components: {
    Checked,
  },
  filters: {},
};
</script>

<style scoped lang="scss">
#cart-bottom-bar {
  position: absolute;
  bottom: 49px;
  display: flex;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 40px;

  .check-all {
    flex: 1;
    display: flex;
    align-items: center;
    .check {
      width: 22px;
      height: 22px;
      margin-right: 2px;
    }
  }
  .total {
    flex: 2;
  }
  .payoff {
    flex: 2;
    height: 100%;
    line-height: 40px;
    background: #ff7782;
  }
}
</style>
