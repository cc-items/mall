<template>
  <div id="index">
    <nav-bar id="index-nav">
      <template v-slot:center>
        <span>购物车</span>
      </template>
    </nav-bar>
    <tab-controll
      :titles="['流行', '新款', '精选']"
      class="tab"
      @click-tab="clickTab($event)"
      v-show="isShowTabControll"
      ref="tabControllOne"
    >
    </tab-controll>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="scrollPosition($event)"
      :pull-upload="true"
      @pullingUp="pullUpLoad"
    >
      <home-swiper
        :banners="banners"
        @swiperLoad="swiperLoad"
        ref="swiper"
      ></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-controll
        :titles="['流行', '新款', '精选']"
        class="tab"
        @click-tab="clickTab($event)"
        ref="tabControlltwo"
      >
      </tab-controll>
      <div id="goods">
        <goods-list
          :goods="goods[currentType].list"
          @loadImage="loadImage"
        ></goods-list>
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
import BackTop from "components/base/backTop/BackTop.vue";
import {imageLoadMixin} from 'common/mixins.js'
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
      isShow: false,
      refresh: null,
      tabControll: 0,
      isShowTabControll: false,
      scrollY: 0,
      scrollTop: 0,
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    // this.$bus.$on('load',() => {
    //   console.log(1)
    // })
  },
  mounted() {
    this.refresh = this.debounce(this.$refs.scroll.refesh, 400);
  },
  activated() {
    if (this.scrollY) {
      this.$refs.scroll.betterScroll.scrollTo(0,this.scrollY,1);
      this.$refs.scroll.refesh();
    }
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.betterScroll.y;
    // 取消自定义事件.
    // this.$off("loadImage", this.loadImage);
  },
  mixins: [imageLoadMixin],
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
      this.$refs.tabControllOne.currentIndex = e;
      this.$refs.tabControlltwo.currentIndex = e;
    },
    clickBack() {
      //可以访问子组件的属性(data)和方法(函数);
      this.$refs.scroll.scrollTo(0, 0);
    },
    scrollPosition(position) {
      this.isShow = -position.y > 500;
      this.isShowTabControll = -position.y > this.tabControll;
    },
    pullUpLoad() {
      this.getHomeGoods(this.currentType);
      // 默认只加载一次,结束加载后可触发重新加载.
      this.$refs.scroll.finishPullUp();
      this.$refs.scroll.refesh();
    },
    //防抖: 避免重复的操作频繁执行,只在最后一个操作结束之后进行执行: 思路: 延时器.
    // 全局变量的生命周期和网页样长.
    // 闭包函数指的是可以访问父作用域的函数.即使父函数关闭之后.
    debounce(fun, delay) {
      let timer = null;
      return function (...args) {//闭包
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          // vue实例会调用该方法.
          fun.apply(this, args);
        }, delay);
      };
    },
    loadImage() {
      this.refresh();
    },
    swiperLoad() {
      this.tabControll = this.$refs.tabControlltwo.$el.offsetTop;
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    TabControll,
    FeatureView,
    GoodsList,
    Scroll,
    BackTop,
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
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // z-index: 9;
  background: $tint-color;
}

// .tab {
//   // 兼容性不是很好适用于手机端的.
//   position: sticky;
//   top: 44px;
//   z-index: 9;
// }
.tab {
  position: relative;
  z-index: 10;
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
