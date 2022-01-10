import Toast from "components/common/toast/Toast";
//将Toast挂载到页面上,不可以使用 document.body.appendChild(Toast.$el),因为组件没有挂载到页面上,需要先挂载extend
const install = function (Vue, options) {
  // 创建组件的构造函数
  const ToastConstructor = Vue.extend(Toast);
  // 创建组件的实例并挂载到页面上.
  const toast = new ToastConstructor().$mount(document.createElement("div"));
  // 将组件中的根元素挂载页面上
  document.body.insertBefore(toast.$el, document.querySelector('script'))
  // 将实例中的属性和方法挂载到Vue构造函数原型中.
  Vue.prototype.$toast = toast;
};

export default {
  install,
};
