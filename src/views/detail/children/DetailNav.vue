<template>
  <div id="detail-nav">
    <nav-bar>
      <template v-slot:left>
        <div class="left-arrow" @click="backClick">
          <img src="~assets/img/leftArrow.svg" alt="left-arrow" />
        </div>
      </template>
      <template v-slot:center>
        <div class="nav-list">
          <span
            v-for="(item, index) in navList"
            :key="item"
            :class="{active: index === currentIndex}" @click= "clickNavList(index)"
            >{{ item }}</span
          >
        </div>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "datailNav",
  props: {},
  data() {
    return {
      navList: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  created() {},
  computed: {},
  methods: {
    clickNavList(index) {
      this.currentIndex = index;
      this.$emit('click-nav',index)
    },
    backClick() {
      this.$router.back();
    }
  },
  components: {
    NavBar,
  },
  filters: {},
};
</script>
<style scoped lang="scss">
#detail-nav {
  .left-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(44rem / 16);
    img {
      width: 55%;
    }
  }

  .nav-list {
    display: flex;
    justify-content: space-around;
    span {
      font-size: 14px;
    }
  }
}

.active {
  color: $tint-color;
}
</style>
