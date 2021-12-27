<template>
  <div id="index">
    <nav-bar id="index-nav">
      <template v-slot:center>
        <span>购物车</span>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <div id="feature">
      <a href="javascript:;">
        <img src="~assets/img/recommend_bg.jpg" alt="流行" />
      </a>
    </div>
    <tab-controll :titles="['流行', '新款', '精选']" class="tab">
    </tab-controll>
    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./homeChildren/HomeSwiper";
import RecommendView from "./homeChildren/HomeRecomendView.vue";
import TabControll from "components/base/tabControll/TabControll.vue";
export default {
  name: "index",
  props: {},
  data() {
    return {
      banners: [],
      recommend: [],
    };
  },
  created() {
    this.$get("/home/multidata").then((res) => {
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      console.log(res);
    });
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    TabControll,
  },
};
</script>

<style scoped lang="scss">
#index-nav {
  background: $tint-color;
}

#feature {
  img {
    width: 100%;
  }
}
.tab {
  // 兼容性不是很好适用于手机端的.
  position: sticky;
  top: 0;
}
</style>
