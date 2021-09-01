Array.prototype.myMap = function (func = () => { }, thisArg = []) {
  let result = []
  this.reduce((pre, curr, index, arr) => {
    result.push(func.call(thisArg, curr, index, arr))
  }, [])
  return result
}