import VueRouter from "vue-router";
export default function rewritePush() {
  const originalPush = VueRouter.prototype.push;
  VueRouter.prototype.push = function push(location, onComplete, onAbort) {
    if (onComplete || onAbort)
      return originalPush.call(this, location, onComplete, onAbort);
    return originalPush.call(this, location).catch((err) => err);
  };
}
