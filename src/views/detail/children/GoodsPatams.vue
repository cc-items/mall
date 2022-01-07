<template>
  <div id="goods-params" v-if="Object.keys(goodParams).length !== 0">
    <table
      v-for="(table, index) in goodParams.sizes"
      :key="index"
      class="goods-sizes"
    >
      <!-- 定义表格列的属性 常常用于列样式的设置 默认定义第一列的属性格式化 width定义每一列的宽度-->
      <colgroup class="sizes-item ">
        <col />
      </colgroup>
      <!-- <colgroup></colgroup> 定义列组的属性格式化,默认是第一列 -->
      <!-- <colgroup></colgroup> -->
      <tbody>
        <tr v-for="(tr, indey) in table" :key="indey">
          <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
        </tr>
      </tbody>
    </table>
    <table class="goods-info">
      <colgroup>
        <col class="info-item" />
        <col />
      </colgroup>
      <tbody>
        <tr v-for="(item, index) in goodParams.info" :key="index">
          <td>{{ item.key }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="goodParams.images.length !== 0" class="goods-img">
      <img :src="goodParams.images" alt="goods-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsParams",
  props: {
    goodParams: {
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
table {
  width: 100%;
}
table,
th,
td {
  border-bottom: 1px solid #000;
}
th,
td {
  padding: 10px;
  vertical-align: middle;
}
#goods-params {
  margin-top: 20px;
  padding: 5px;
  .goods-sizes {
    // border-collapse: collapse;单元格之间的边框是分开法人还是合并的状态.
    .sizes-item {
      width: 70px;
    }
  }
  .goods-info {
    .info-item {
      width: 70px;
    }
  }
  .goods-img {
    width: 100%;
    object-fit: contain;
  }
}
</style>
