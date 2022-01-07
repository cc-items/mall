<template>
  <TabBar>
    <TabBarItem path="/home">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/index.svg" alt="index" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/active-index.svg" alt="active of index" />
      </template>
      <template v-slot:item-text>

        <span>首页</span>
      </template>
    </TabBarItem>
    <TabBarItem path="/category">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/category.svg" alt="index" />
      </template>
      <template v-slot:item-icon-active>
        <img
          src="~assets/img/tabbar/active-category.svg"
          alt="active of category"
        />
      </template>
      <template v-slot:item-text>
        <span>种类</span>
      </template>
    </TabBarItem>
    <TabBarItem path="/cart">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/cart.svg" alt="index" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/active-cart.svg" alt="active of cart" />
      </template>
      <template v-slot:item-text>
        <span>购物车</span>
      </template>
    </TabBarItem>
    <TabBarItem path="/profile">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/profile.svg" alt="index" />
      </template>
      <template v-slot:item-icon-active>
        <img
          src="~assets/img/tabbar/active-profile.svg"
          alt="active of profile"
        />
      </template>
      <template v-slot:item-text>
        <span>我的</span>
      </template>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  components: {
    TabBar,
    TabBarItem
  },
  filters: {},
};
</script>
