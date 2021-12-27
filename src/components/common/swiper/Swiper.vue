<template>
  <div class="swiper">
    <div
      class="swiper-items"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
    >
      <slot></slot>
    </div>
    <div class="indicator" v-show="imageNum > 1 && isShowindicator">
      <ul class="indicator">
        <li
          v-for="(item, index) in imageNum"
          :key="index"
          class="indicator-item"
          :class="{ 'indicator-item-active': index === currentIndex - 1 }"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    interval: {
      type: Number,
      default: 2000,
    },
    isShowindicator: {
      type: Boolean,
      default: true,
    },
    moveRdio: {
      type: Number,
      default: 0.25,
    },
    transDuration: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      imageNum: 0,
      timer: null,
      swiperItemsStyle: {},
      currentIndex: 1,
      totalWidth: 0,
      startX: 0,
      endX: 0,
      distance: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.setTimeout(() => {
        this.handleDom();
        this.startTimer();
      }, 300);
    });
  },
  methods: {
    handleDom() {
      let swiperItems = document.querySelector(".swiper-items");
      let swiperItem = swiperItems.querySelectorAll(".swiper-item");
      this.imageNum = swiperItem.length;

      if (this.imageNum > 1) {
        let firstImageClone = swiperItem[0].cloneNode(true);
        let lastImmageClone = swiperItem[this.imageNum - 1].cloneNode(true);
        swiperItems.insertBefore(lastImmageClone, swiperItem[0]);
        swiperItems.appendChild(firstImageClone);
        this.swiperItemsStyle = swiperItems.style;
        this.totalWidth = swiperItems.offsetWidth;
      }
      this.animate(this.totalWidth * this.currentIndex);
    },
    startTimer() {
      this.timer = window.setInterval(() => {
        this.currentIndex++;
        this.position(this.totalWidth * this.currentIndex);
      }, this.interval);
    },
    stopTimer() {
      window.clearInterval(this.timer);
    },
    animate(translateX) {
      this.swiperItemsStyle.transform = `translateX(-${translateX}px)`;
      this.swiperItemsStyle[
        "-webkit-transform"
      ] = `translateX(-${translateX}px)`;
      this.swiperItemsStyle["-ms-transform"] = `translateX(-${translateX}px)`;
    },
    position(translateX) {
      this.swiperItemsStyle.transition = "transform";
      this.swiperItemsStyle.transition = this.transDuration + "s";
      this.animate(translateX);
      this.checkedPostion();
    },
    checkedPostion() {
      window.setTimeout(() => {
        this.swiperItemsStyle.transition = "0s";
        if (this.currentIndex >= this.imageNum + 1) {
          this.currentIndex = 1;
          this.animate(this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.imageNum;
          this.animate(this.currentIndex * this.totalWidth);
        }
      }, this.transDuration);
    },
    touchstart(e) {
      this.stopTimer();
      this.startX = e.touches[0].pageX;
    },
    touchmove(e) {
      this.endX = e.touches[0].pageX;
      this.distance = -(this.endX - this.startX);
      let moveDistance = this.totalWidth * this.currentIndex + this.distance;
      this.position(moveDistance);
    },
    touchend() {
        let currentDistance = this.distance;
        if (this.distance === 0) return;
        else if (
          this.distance > 0 &&
          currentDistance > this.totalWidth * this.moveRdio
        ) {
          this.currentIndex++;
        } else if (this.distance < 0 && this.totalWidth * this.moveRdio) {
          this.currentIndex--;
        }
      this.position(this.totalWidth * this.currentIndex);
      this.startTimer();
    },
  },
};
</script>

<style scoped lang="scss">
.swiper {
  position: relative;
  overflow: hidden;

  .swiper-items {
    display: flex;
    width: 100%;
  }

  .indicator {
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 10%;
    width: 100%;

    .indicator-item {
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: #fff;
    }

    .indicator-item-active {
      background-color: #d43e2e;
    }
  }
}
</style>
