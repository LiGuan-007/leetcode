(function () {

  const timerSet = new Set()

  function _setInterval(cb, delay) {

    let ref = {};

    const exec = () => {
      return setTimeout(() => {
        cb();
        ref.timer = exec()

      }, delay)
    }
    ref.timer = exec();

    timerSet.add(ref)

    return ref;
  }

  function _clearInterval(ref) {
    clearTimeout(ref.timer);
    timerSet.delete(ref)
  }

  // this指向全局
  this._setInterval = _setInterval
  this._clearInterval = _clearInterval

})()

_setInterval(() => { console.log(111) }, 1000)