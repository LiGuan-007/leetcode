// compose
function compose(...fns) {
  let length = fns.length;
  let currFnIndex = length - 1;
  let result;
  return function exe(...args) {
    result = fns[currFnIndex].apply(this, args)
    if (currFnIndex === 0) {
      return result
    } else {
      currFnIndex--;
      return exe.call(this, result)
    }
  }
}

// pipe
function pipe(...fns) {

  const length = fns.length;
  const curr = 0;
  return function exe(...args) {
    let result = fns[curr].apply(this, args)

    if (curr >= length) {
      return result
    } else {
      curr++;
      return exe.call(this, result)
    }
  }

}