(() => {
  let timerSet = new Set()

  function mySetInterval(fn, delay = 0) {
    let ref = {};
    const exec = () => {
      return setTimeout(() => {
        fn();
        ref.current = exec();
      }, delay)
    }

    ref.current = exec();
    timerSet.add(ref);
    return ref;
  }

  function clearMySetInterval(ref) {
    clearTimeout(ref.current);
    timerSet.delete(ref);
  }

  window.mySetInterval = mySetInterval;
  window.clearMySetInterval = clearMySetInterval;
})();

let myTimer = mySetInterval(() => { console.log(123) }, 800)
setTimeout(() => { clearMySetInterval(myTimer) }, 4000)