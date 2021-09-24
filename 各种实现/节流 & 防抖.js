// 节流
// 每隔一段时间，只执行一次函数。
function throttle(fn, delay) {
  var timer = null;
  return function (...args) {
    var _this = this;
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(_this, args);
      timer = null;
    }, delay)
  }
}

// 防抖
// 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
function debounce(fn, delay) {
  var timer = null;
  return function (...args) {
    var _this = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(_this, args)
    }, delay)
  }
}
