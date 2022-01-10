<template>
  <div class="cart-item" v-if="Object.keys(cartListItem).length !== 0">
    <checked
      :is-show-image="cartListItem.checked"
      @click.native="clickChecked"
    ></checked>
    <div class="item-image">
      <img :src="cartListItem.image" alt="item-image" />
    </div>
    <div class="item-info">
      <div class="item-desc">
        <div class="title">{{ cartListItem.title }}</div>
        <div>{{ cartListItem.desc }}</div>
      </div>
      <div class="item-price">
        <span>¥{{ cartListItem.price }}</span>
        <span>x{{ cartListItem.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Checked from "./Checked";
export default {
  name: "cartItem",
  props: {
    cartListItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    // 数据统一放在父组件中进行管理.
    return {};
  },
  created() {},
  computed: {},
  methods: {
    // 记录选中状态,不进行单独记录的,一般在唯一商品对象模型记录,定义为checked属性,这样每一个商品之间互不影响.
    clickChecked() {
      this.cartListItem.checked = !this.cartListItem.checked;
    },
  },
  components: {
    Checked,
  },
  filters: {},
};
</script>

<style scoped lang="scss">
.cart-item {
  display: flex; //会影响flex元素的宽度单位.
  width: 100vw;
  height: 20%;
  margin-top: 5px;
  border-bottom: 1px solid #a6a6a6;
  align-items: center;
  // justify-content: space-between;
  .item-image {
    width: 30%;
    img {
      width: 100%;
      height: inherit;
      border-radius: 10px;
    }
  }
  .item-info {
    width: 60%;
    height: 100%;
    .item-desc {
      width: 100%;
      padding: 10px;
      .title {
        // 溢出的文本为省略号.
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .title + div {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .item-price {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 10px;
      span:nth-child(1) {
        color: #ff7f89;
      }
    }
  }
}
// .item-checkbox {
//   position: relative;
//   width: 16px;
//   height: 16px;
//   padding: 5px;
//   .checkbox {
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 16px;
//     height: 16px;
//     visibility: hidden;
//   }
//   .checkbox + label {
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 16px;
//     height: 16px;
//     border: 1px solid #a6a6a6;
//     border-radius: 8px;
//   }
//   // 复选框被选中时label的样式..
//   .checkbox:checked + label::after {
//     content: "";
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 9px;
//     height: 4px;
//     border: 2px solid #ff7782;
//     border-top-color: transparent;
//     border-right-color: transparent;
//     transform: rotate(-45deg);
//     -ms-transform: rotate(-60deg);
//     -moz-transform: rotate(-60deg);
//     -webkit-transform: rotate(-60deg);
//   }
// }
</style>
