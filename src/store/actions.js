// 进行一些复杂操作例如:异步任务,
export default {
  // 进行异步操作或复杂的操作
  addCart({ state, commit }, payload) {
    const product = state.cartList.find((item) => {
      return item.iid === payload.iid;
    });
    return new Promise((resolve, reject) => {
      if (product) {
        commit("ADD_COUNT", product);
        resolve('当前商品成功+1')
      } else {
        commit("ADD_TO_COUNT", payload);
        resolve('添加新商品成功')
      }
    });
  },
};
