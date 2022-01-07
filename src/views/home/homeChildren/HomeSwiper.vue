<template>
  <div id="home-swiper">
    <Swiper>
      <SwiperItem v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="image" @load="swiperLoad"/>
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "homeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperImageLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    swiperLoad() {
      if (!this.swiperImageLoad) {
        this.$emit('swiperLoad')
        this.swiperImageLoad = true;
      }
    }
  }
};
</script>
