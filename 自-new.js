

// 原理
// 1.new关键字会首先创建一个空对象
// 2.将这个空对象的原型对象指向构造函数的原型属性，从而继承原型上的方法
// 3.将this指向这个空对象，执行构造函数中的代码，以获取私有属性
// 4.如果构造函数返回了一个对象res，就将该返回值res返回，如果返回值不是对象，就将创建的对象返回


function _new(fn, ...args) {
  //1.创建一个空对象，并将对象的__proto__指向构造函数的prototype 这里两步一起做了
  let obj = Object.create(fn.prototype);
  //2.将构造函数中的this指向obj，执行构造函数代码,获取返回值 
  let res = fn.apply(obj, args);
  //3.判断返回值类型 
  return res instanceof Object ? res : obj;
}