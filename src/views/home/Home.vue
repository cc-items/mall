<template>
  <div id="index">
    <nav-bar id="index-nav">
      <template v-slot:center>
        <span>购物车</span>
      </template>
    </nav-bar>

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="scrollPosition($event)" :pull-upload="true" @pullingUp="pullUpLoad">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-controll
        :titles="['流行', '新款', '精选']"
        class="tab"
        @click-tab="clickTab($event)"
      >
      </tab-controll>
      <div id="goods">
        <goods-list :goods="goods[currentType].list"></goods-list>
      </div>
    </scroll>

    <back-top @click="clickBack" ref="back" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./homeChildren/HomeSwiper";
import RecommendView from "./homeChildren/HomeRecomendView.vue";
import TabControll from "components/base/tabControll/TabControll.vue";
import FeatureView from "./homeChildren/FeatureView.vue";
import GoodsList from "components/base/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/base/backTop/BackTop.vue"
export default {
  name: "index",
  props: {},
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      currentType: "pop",
      isShow: false
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidata() {
      this.$get("/home/multidata").then((res) => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      let params = {
        type: type,
        page: this.goods[type].page,
      };
      this.$get("/home/data", params).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
      });
    },
    // 自定义对象的值就是参数;
    clickTab(e) {
      switch (e) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    clickBack() {
      //可以访问子组件的属性(data)和方法(函数);
      this.$refs.scroll.scrollTo(0,0);
    },
    scrollPosition(position) {
     this.isShow = -position.y > 500
    },
    pullUpLoad() {
      this.getHomeGoods(this.currentType)
      // 默认只加载一次,结束加载后可触发重新加载.
      this.$refs.scroll.finishPullUp();
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    TabControll,
    FeatureView,
    GoodsList,
    Scroll,
    BackTop
  },
};
</script>

<style scoped lang="scss">
#index {
  position: relative;
  height: 100vh;
}
#index-nav {
  // 会脱离标准流;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background: $tint-color;
}

.tab {
  // 兼容性不是很好适用于手机端的.
  position: sticky;
  top: 44px;
  z-index: 9;
}

#goods {
  margin-top: 10px;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>
