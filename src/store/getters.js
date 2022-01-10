export default {
  // store中的计算属性,state中的派生状态.
  cartListLength(state, getters) {
    return state.cartList.length
  },
  filterChecked(state, getters) {
    return state.cartList.filter((item, index) => {
      return item.checked
    })
  },
  filterCheckedLength(state,getters) {
    return getters.filterChecked.length
  }
}
