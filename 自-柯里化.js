// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

// function curryAdd() {
//   var _args = [...arguments];
//   console.log('_args', _args)

//   var _add = function () {
//     _args.push(...arguments);
//     console.log('_add_args', _args);
//     return _add;
//   }

//   _add.toString = function () {
//     return _args.reduce((pre, curr) => {
//       return pre + curr
//     })
//   }

//   return _add
// }

// console.log(curryAdd(1)(2)(3))











// const curry = function () {
//   const [fn, ...curryArgs] = arguments;
//   let length = fn.length;
//   console.log('fn', fn);
//   console.log('curryArgs', curryArgs)
//   return function (...args) {
//     const _args = [...curryArgs, ...args];
//     console.log('_args', _args);


//     return _args.length < length
//       ? curry.call(this, fn, ..._args)
//       : fn.apply(this, _args);

//   }
// }

// // function add(a, b) {
// //   return a + b;
// // }
// // var addFun = curry(add, 1, 2);
// // console.log('addFun', addFun(3,4))

// var addFun = curry(function (a, b, c) {
//   return a + b + c;
// });
// console.log('addFun', addFun(2)(3))






function dynamicAdd() {
  return [...arguments].reduce((prev, curr) => {
    return prev + curr
  }, 0)
}

function curry(fn, firstArg) {
  // 返回一个新函数
  return function () {
    // 新函数调用时会继续传参
    var restArgs = [].slice.call(arguments)
    // 参数合并，通过apply调用原函数
    return fn.apply(this, [firstArg, ...restArgs])
  }
}

var add10 = curry(dynamicAdd, 10)

console.log(add10(5)(2))
