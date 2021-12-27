<template>
  <div id="recommend">
    <div v-for="(item, index) in recommend" :key="index" class="recommend-item">
      <div class="recommend-image">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" />
        </a>
      </div>
      <div class="recommend-text">
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeRecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
#recommend {
  display: flex;
  width: 100%;
  font-size: 12px;

  .recommend-item {
    flex: 1;
    padding: 15px 0 15px;
    border-bottom: 8px solid #eee;
    .recommend-image {
      text-align: center;
      img {
        width: 80%;
      }
    }
    .recommend-text {
      text-align: center;
    }
  }
}
</style>
