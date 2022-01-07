<template>
  <div id="comment-info" v-if="Object.keys('commentInfo').length !== 0">
    <div class="user-comment">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-content" v-if="commentInfo.user">
      <div class="user-avatar">
        <img :src="commentInfo.user.avatar" alt="avater" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <div class="user-content">
        <span>{{ commentInfo.content | filterSpace }}</span>
      </div>
      <div class="user-time">
        <!-- 秒的事件戳 -->
        <span>{{
          (commentInfo.created * 1000) | dateFormat("yyyy-MM-dd hh:mm:ss")
        }}</span>
        |
        <span v-for="(item, index) in commentInfo.style" :key="index">{{
          item
        }}</span>
      </div>
      <div class="user-img">
        <div
          v-for="(item, index) in commentInfo.images"
          :key="index"
          class="user-img-item"
        >
          <img :src="item" alt="user-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "commentInfo",
  props: {
    commentInfo: {
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
  filters: {
    filterSpace(str) {
      if (!str) return "";
      const reg = /\s+/g;
      return str.replace(reg, ",");
    },
    // date = '/Date(123456789)/  || 122344556 || '1234567''格式化.
    dateFormat(date, format) {
      if (typeof date === "string") {
        let md = date.match(/(\/Date\((\d+)\)\/)/);
        if (md && md.length >= 3) {
          date = parseInt(md[2]);
        } else {
          date = parseInt(date);
        }
      }
      date = new Date(date);
      if (!date || date.toUTCString == "Invalid Date") {
        return "Invalid Date";
      }
      // 映射
      const map = {
        M: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
        q: Math.floor((date.getMonth + 3) / 3),
        S: date.getMilliseconds(),
      };
      format = format.replace(/([yMdhmsqS])+/g, (all, t) => {
        let v = map[t];
        if (v !== undefined) {
          if (t.length >= 1) {
            v = "0" + v;
            v = v.substr(v.length - 2); //当v > 2时,从第二个元素获取.substr()包含起始位的字符.
          }
          return v;
        } else if (t == "y") {
          return (date.getFullYear() + "").substr(4 - all.length);
        }
      });
      return format;
    },
  },
};
</script>

<style scoped lang="scss">
.user-comment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 5px solid #f3f2f3;
}
.comment-content {
  .user-avatar {
    img {
      width: 16%;
      padding: 5px;
      vertical-align: middle;
      border-radius: 30px;
    }
  }
  .user-content {
    padding: 5px;
    text-indent: 2rem;
  }
  .user-time {
    padding: 5px;
  }
  .user-img {
    display: flex;
    .user-img-item {
      flex: 1;
      height: 100px;
      padding: 5px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
