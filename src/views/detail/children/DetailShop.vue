<template>
  <div id="detail-shop" v-if="Object.keys(shop).length !== 0">
    <div class="shop-logo">
      <img :src="shop.logo" alt="logo" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="shop-info">
      <div class="sale-count">
        <span>{{ (shop.saleCount / 10000).toFixed(1) }}万</span>
        <div>
          <span>总销量</span>
        </div>
      </div>
      <div class="all-goods">
        <span>{{ shop.goodsCount }}</span>
        <div>
          <span>宝贝</span>
        </div>
      </div>
      <div class="split-line"></div>
      <div class="user-eval">
        <div v-for="(item, index) in shop.store" :key="index">
          <span>{{ item.name }}</span>
          <span :class="{ betterColor: item.isBetter }">{{ item.score }}</span>
          <span :class="{ betterColor: item.isBetter }">{{
            item.isBetter ? "高" : "低"
          }}</span>
        </div>
      </div>
    </div>
    <div class="go-shop">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailShop",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
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
#detail-shop {
  padding: 10px;
  border-bottom: 5px solid #f6f6f6;
  .shop-logo {
    img {
      width: 20%;
      vertical-align: middle;
    }
    span {
      padding: 10px;
      font-size: 20px;
      color: #d2d0ce;
    }
  }
  .shop-info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .sale-count {
      div {
        margin-top: 5px;
      }
    }
    .all-goods {
      div {
        margin-top: 5px;
      }
    }
    .split-line {
      height: 65px;
      border: 1px solid #f5f4f5;
    }
    .user-eval {
      div {
        display: flex;
        justify-content: space-between;
        span {
          padding: 5px;
        }
      }
    }
  }
  .go-shop {
    width: 100%;
    text-align: center;
    span {
      display: inline-block;
      width: 25%;;
      background: #f1f5fc;
      border-radius: 10px;
    }
  }
}
.betterColor {
  color: #ffa6a2;
}
</style>
