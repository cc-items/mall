// 唯一的目的是修改state的数据
//每个方法完成的事件尽可能的单一.为了更加明确的追踪数据.并且是同步事件否则工具不能对数据进行追踪.
import { ADD_COUNT, ADD_TO_COUNT } from "./mutations-types";
export default {
  [ADD_COUNT](state, product) {
    product.count++;
  },
  [ADD_TO_COUNT](state, payload) {
    payload.count = 1;
    payload.checked = true
    state.cartList.push(payload);
  },
};
//定义addToCart事件.
/*const index = state.cartList.indexOf(payload);只能获取数组元素不是对象的索引.此处不可用.
    const isProduct = state.cartList.find((item, index) => {
      return item.iid === payload.iid
    })
    //返回已经存在的商品.
    if (isProduct) {
      isProduct.count++
    } else {
      payload.count = 1
      state.cartList.push(payload)
    }
    state.cartList.forEach((item, index, array) => {
      if (item.iid == payload.iid) {
        item.count++
      } else {
        payload.count = 1
        array.push(payload)
      }
    })
    forEach()不会对空数组进行遍历.
      let oldProduct = null;
      for (let item of state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item;
        }
      }
      if (oldProduct) {
        oldProduct.count++;
      } else {
        payload.count = 1;
        state.cartList.push(payload);
      }
    },*/
