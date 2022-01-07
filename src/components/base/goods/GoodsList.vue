<template>
  <div class="goods-list">
    <div
      v-for="(item, index) in goods"
      :key="index"
      class="goods-list-item"
      @click="clickImg(item.iid)"
    >
      <img
        :src="item.image || item.show.img"
        alt="pop"
        class="goods-image"
        @load="loadImage"
      />
      <div class="goods-list-text">
        <p class="title">{{ item.title }}</p>
        <span class="price">{{ item.price }}</span>
        <span class="collect">
          {{ item.cfav }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "goodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  created() {},
  computed: {
  },
  methods: {
    // 组件的复用会造成一个页面触发该事件,其它页面也会执行该事件,使用this.$off取消某一个事件.
    loadImage() {
      this.$emit('loadImage')
      // this.$bus.$emit('loadImage')
    },
    clickImg(iid) {
      this.$router.push({path: '/detail',query: {iid}})
    }
  },
  components: {},

};
</script>
<style scoped lang="scss">
.goods-list {
  .goods-list-item {
    display: inline-block;
    width: 50%;
    .goods-image {
      width: 100%;
      height: calc(281.25em / 16);
      border: 3px solid #fff;
      border-width: 6px 3px 6px 6px;
      border-radius: 10px;
      // object-fit: cover;
    }
    .goods-list-text {
      padding: 3px;
      text-align: center;
      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      span:nth-of-type(1) {
        color: $tint-color;
      }
      span {
        padding: 5px;
      }
      span:nth-of-type(2)::before {
        content: "";
        display: inline-block;
        width: 14px;
        height: 14px;
        // 0/14px 14px控制图片的大小的background-size;
        // 14px 14px background-position
        background: url("~assets/img/collect.svg") no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>
