<template>
  <div id="detail-image" v-if="Object.keys(detailInfo).length !== 0">
    <div class="detail-image-desc">
      <div class="top">
        <span></span>
        <span></span>
      </div>
      <div class="title">
        <span> {{ detailInfo["desc"] }}</span>
      </div>
      <div class="bottom">
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="detail-image-key">
      <span>{{ detailInfo.detailImage[0].key }}</span>
    </div>
    <div class="detail-image-list">
      <div v-for="(item, index) in detailInfo.detailImage[0].list" :key="index">
        <img :src="item" alt="img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailImage",
  props: {
    detailInfo: {
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
#detail-image {
  border-bottom: 5px solid #f6f6f6;
}
.detail-image-desc {
  position: relative;
  height: 100px;
  padding: 5px;
  .top {
    span:nth-child(1) {
      display: inline-block;
      width: calc(5rem / 16);
      height: calc(5rem / 16);
      background: #000000;
    }
    span:nth-child(2) {
      display: inline-block;
      width: calc(150rem / 16);
      border: 1px solid #dbd9db;
    }
  }
  .bottom {
    position: absolute;
    right: 5px;
    span:nth-child(1) {
      display: inline-block;
      width: calc(5rem / 16);
      height: calc(5rem / 16);
      background: #000000;
    }
    span:nth-child(2) {
      display: inline-block;
      width: calc(150rem / 16);
      border: 1px solid #dbd9db;
    }
  }
  .title {
    width: 100%;
    height: 40px;
    text-indent: 2em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; //可以把 块容器 中的内容限制为指定的行数.
    &:hover {
      overflow: visible;
    }
  }
}
.detail-image-key {
  padding: 5px;
}
.detail-image-list {
  img {
    width: 100%;
  }
}
</style>
