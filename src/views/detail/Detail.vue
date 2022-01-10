<template>
  <div id="detail">
    <detail-nav @click-nav="clickNav($event)" ref="nav"></detail-nav>
    <scroll
      class="content"
      ref="scroll"
      @scroll="scroll($event)"
      :probe-type="3"
    >
      <swiper class="top-image">
        <swiper-item
          v-for="(item, index) in topImages"
          :key="index"
          class="top-image-item"
          ref="goods"
        >
          <img :src="item" alt="top-image" />
        </swiper-item>
      </swiper>
      <detail-goods-info :goods="goods"></detail-goods-info>
      <detail-shop :shop="shop"></detail-shop>
      <detail-image :detail-info="detailInfo"></detail-image>
      <goods-params :good-params="goodParams" ref="params"></goods-params>
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list
        :goods="recommend"
        @loadImage="loadImage"
        ref="recommend"
      ></goods-list>
    </scroll>
    <detail-bottom-bar @add-to-cart= "addToCart"></detail-bottom-bar>
    <back-top @click="clickBackTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNav from "./children/DetailNav.vue";
import Swiper from "components/common/swiper/Swiper.vue";
import SwiperItem from "components/common/swiper/SwiperItem.vue";
import { Shop, Goods, GoodParams } from "./detail.js";
import DetailShop from "./children/DetailShop.vue";
import DetailGoodsInfo from "./children/DetailGoodsInfo.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import DetailImage from "./children/DetailImage.vue";
import GoodsParams from "./children/GoodsPatams";
import DetailCommentInfo from "./children/DetailCommentInfo.vue";
import GoodsList from "components/base/goods/GoodsList.vue";
import { imageLoadMixin, backTopMixin } from "common/mixins.js";
import debounce from "common/units/debounce.js";
import DetailBottomBar from "./children/DetailBottomBar.vue";
import {mapActions } from 'vuex'
export default {
  name: "detail",
  props: {
    query: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      iid: "",
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodParams: {},
      commentInfo: {},
      recommend: [],
      navSkip: [],
      topValue: null,
      index: 0,
    };
  },
  created() {
    this.iid = this.query;
    this.getDetail();
    this.getRecomend();
    this.topValue = debounce(this.getNavTop, 400);
  },
  mounted() {
    // 所有的组件挂载完成后
    this.$nextTick(() => {});
  },
  updated() {
    // 所有的dom更新完后.
    this.$nextTick(() => {})
  },
  computed: {},
  methods: {
    getDetail() {
      this.$get("/detail", { iid: this.iid }).then((res) => {
        this.topImages = res.result.itemInfo.topImages;
        this.goods = new Goods(
          res.result.columns,
          res.result.itemInfo,
          res.result.shopInfo
        );
        this.shop = new Shop(res.result.shopInfo);
        this.detailInfo = res.result.detailInfo;
        this.goodParams = new GoodParams(
          res.result.itemParams.rule,
          res.result.itemParams.info
        );
        if (res.result.rate["list"]) this.commentInfo = res.result.rate.list[0];
      });
    },
    getRecomend() {
      this.$get("/recommend").then((res) => {
        this.recommend = res.data.list;
      });
    },
    getNavTop() {
      this.navSkip = [];
      this.navSkip.push(0);
      this.navSkip.push(this.$refs.params.$el.offsetTop);
      this.navSkip.push(this.$refs.comment.$el.offsetTop);
      this.navSkip.push(this.$refs.recommend.$el.offsetTop);
      this.navSkip.push(Number.MAX_VALUE);
    },
    loadImage() {
      //图片加载的时候获取最新的offsetTop.
      // 获取的是组件根元素距离父元素top的距离.
      this.$refs.scroll.refesh();
      this.topValue();
    },
    clickNav(index) {
      this.$refs.scroll.scrollTo(0, -this.navSkip[index], 0);
    },
    scroll(position) {
      // 0 < positionY <= 1 1< positionY <= 2 2 <= positionY < 3 3 < positionY index = 0 ,1 ,2 ,3 依次;
      // hack做法: 将最后一个归档到前三个,为一类:思想空间换时间给数组中添加一个最大值即可.
      const arr = this.navSkip,
        len = arr.length;
      for (let x in arr) {
        x = parseInt(x);
        // if (this.index !== x &&(x < len - 1 && arr[x] < -position.y && -position.y < arr[x + 1]) || (x === len - 1 && -position.y > arr[x])) {
        //   this.index = x;
        //   this.$refs.nav.currentIndex = x;
        // }
        if (
          this.index !== x &&
          x < len - 1 &&
          arr[x] < -position.y &&
          arr[x + 1]
        ) {
          this.index = x;
          this.$refs.nav.currentIndex = x;
        }
      }
      this.showBackTop(position);
    },
    ...mapActions(['addCart']),
    addToCart() {
      // 获取购物车展示信息.
      let product = {}
      product.iid = this.iid
      product.title = this.goods.title
      product.image = this.topImages[0]
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      this.addCart(product).then((res) => {
        this.$toast.show(res)
        // 只调用isShow完成此功能.使用插件进行此功能的开发.
        // this.$isShow(res,duration)
      })
      // setTimeout(() => {
      //   this.isShow = false
      //   this.message = ''
      // },1000)
    }
  },
  mixins: [imageLoadMixin, backTopMixin],
  components: {
    DetailNav,
    Swiper,
    SwiperItem,
    DetailShop,
    DetailGoodsInfo,
    Scroll,
    DetailImage,
    GoodsParams,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  filters: {},
};
</script>

<style scoped lang="scss">
#detail {
  position: relative;
  z-index: 11;
  height: 100vh;
  background: #fff;
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
}
.top-image {
  .top-image-item {
    height: calc(400em / 16);
    img {
      object-fit: contain;
    }
  }
}
</style>
