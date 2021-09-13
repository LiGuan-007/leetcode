function bar() {
  console.log(myName);
}

function foo() {
  var myName = '快手';
  bar();
}

var myName = '用户增长';
foo();



var name = 'window';
const person1 = {
  name: 'person1',
  sayName: () => {
    console.log(this.name);
  }
}
person1.sayName();




var a = 'globalA';
var obj = {
  a: 'objA',
  test
}
function test() {
  console.log(this.a)
}
obj.test();
const globalTest = obj.test;
globalTest();



console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
}, 0);
Promise.resolve().then(function () {
  console.log('promise1');
}).then(function () {
  console.log('promise2');
});
console.log('script end');


var fib = function (n) {
  // if(n===0) return 0;
  // if(n===1) return 1;
  // return fib(n-1) + fib(n-2)

  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
};

var findRepeatNumber = function (nums) {
  let map = new Map();
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i]
    let count = map.has(curr) ? map.get(curr) + 1 : 1;

    map.set(curr, count)
    if (count >= 2) { res.push(curr) }
  }

};


var cuttingRope = function (n) {

  if (n <= 3) return n - 1;

  const m = Math.floor(n / 3);
  const rest = n % 3;
  if (rest === 0) {
    return Math.pow(3, m)
  }
  if (rest === 1) {
    return Math.pow(3, m - 1) * 2 * 2
  }
  if (rest === 2) {
    return Math.pow(3, m) * 2
  }
};


// 是否对称二叉树
var isSymmetric = function (root) {
  if (!root) {
    return true;
  } else {
    return deep(root.left, root.right)
  }

  function deep(l, r) {
    if (l === null && r === null) { return true }
    if (l === null || r === null) {
      return false
    }
    return l.value !== r.value && deep(l.left, r.right) && deep(l.right, r.left)
  }
};