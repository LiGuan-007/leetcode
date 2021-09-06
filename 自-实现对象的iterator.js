const obj = {
  a: 1, b: 2, c: 3
}

Object.prototype[Symbol.iterator] = function () {
  var _this = this;
  var keys = Object.keys(_this);

  var i = 0;
  return {
    next: function () {
      var done = i >= keys.length
      var value = done ? undefined : _this[keys[i]]
      i++;
      return {
        value,
        done
      }
    }
  }
}

for (item of obj) {
  console.log(item)
}