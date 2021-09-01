Function.prototype.myBind = function (thisArg, ...args) {
  const _this = this;

  let fn = function (...params) {
    const context = this instanceof fn ? this : thisArg;
    return _this.apply(context, args.concat(params))
  }

  fn.prototype = Object.create(_this.prototype);
  return fn;
}