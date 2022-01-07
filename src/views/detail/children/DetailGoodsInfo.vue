<template>
  <!-- 如果goods对象有值的话就可以进行Dom渲染 -->
  <div id="goods" v-if="Object.keys(goods).length !== 0">
    <div class="goods-info">
      <p class="goods-title">{{ goods["title"] }}</p>
      <p class="goods-price">
        <span>{{ goods["price"] }}</span>
        <span>{{ goods["oldPrice"] }}</span>
        <span v-if="goods['discountPrice']">{{ goods["discountPrice"] }}</span>
      </p>
      <p class="other-info">
        <span>{{ goods.info[0] }}</span>
        <span>{{ goods.info[1] }}</span>
        <span>{{ goods.services[goods.services.length - 1].name }}</span>
      </p>
    </div>
    <div class="services-info">
      <!-- v-for可以对数值进行遍历  index是从一开始的-->
      <span
        class="services-info-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="icon" />
        <span>{{ goods.services[index].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: "detailGoodsInfo",
  props: {
    goods: {
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
  components: {

  },
  filters: {},
};
</script>

<style scoped lang="scss">
.goods-info {
  padding: 5px;
  margin-top: 15px;
  .goods-title {
    font-weight: bold;
    font-family: Serif;
  }
  .goods-price {
    display: flex;
    align-items: center;
    margin-top: 15px;
    span:nth-child(1) {
      padding-right: 5px;
      font-size: 30px;
      color: #ff5d71;
    }
    span:nth-child(2) {
      text-decoration: line-through;
      color: #c6c4c6;
    }
    span:nth-child(3) {
      align-self: flex-start;
      display: inline-block;
      width: 60px;
      height: 20px;
      font-size: 10px;
      color: #fff;
      vertical-align: middle;
      text-align: center;
      background: #ff5d71;
      border-radius: 10px;
    }
  }
  .other-info {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    color: #c6c4c6;
    border-bottom: 5px solid #f6f6f6;
  }
}
.services-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4px;
  .services-info-item {
    flex-shrink: 0;
    img {
      width: 15px;
      vertical-align: middle;
    }
    span {
      color: #c6c4c6;
      vertical-align: middle;
    }
  }
}
</style>
