function instenceOf(obj, constructor) {
  let __proto = constructor.prototype;

  let tempProto = obj.__proto__

  while (tempProto) {
    if (tempProto === null) {
      return false
    }
    if (tempProto === __proto) {
      return true
    }
    tempProto = tempProto.__proto__
  }
}