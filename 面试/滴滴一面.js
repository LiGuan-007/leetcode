

var value = 1;

function foo() {
  console.log(value);
}

function bar() {
  var value = 2;
  foo();
}

bar();
// 1



var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  return f();
}
checkscope();
// local scope


var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  return f;
}
checkscope()();
// local scope






var a = 1000;
var obj = {
  a: 1,
  b: this.a + 1
}
function fun() {
  var obj = {
    a: 1,
    c: this.a + 2
  }
  return obj.c;
}
console.log(fun());   // 1002
console.log(obj.b);   // 1001




async function a1() {
  console.log('a1 start')
  await a2()
  console.log('a1 end')
}
async function a2() {
  console.log('a2')
}

console.log('script start')

setTimeout(() => {
  console.log('setTimeout')
}, 0)

Promise.resolve().then(() => {
  console.log('promise1')
})

a1()

let promise2 = new Promise((resolve) => {
  resolve('promise2.then')
  console.log('promise2')
})

promise2.then((res) => {
  console.log(res)
  Promise.resolve().then(() => {
    console.log('promise3')
  })
})
console.log('script end')

// script start
// a1 start
// a2
// promise2
// script end
// promise1
// a1 end
// promise2.then
// promise3
// setTimeout








// 继承
function Person(name) {
  this.name = name
}

function Student(name, age) {
  Person.call(this, name);
  this.age = age;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;




console.log(person.constructor === Person.prototype.constructor === Person)   //true
console.log(Object.getPrototypeOf(person) === Person.prototype)  //true
console.log(Object.prototype.__proto__) //null






const promise = new Promise((resolve, reject) => {
  reject("error");
  resolve("success2");
});

promise
  .then(res => {
    console.log("then1: ", res);
  }).then(res => {
    console.log("then2: ", res);
  }).catch(err => {
    console.log("catch: ", err); // catch: error
  }).then(res => {
    console.log("then3: ", res); // then3: undefined
  })






async function async1() {
  await async2();
  console.log('async1');
  return 'async1 success'
}
async function async2() {
  return new Promise((resolve, reject) => {
    console.log('async2')
    reject('error')
  })
}
async1().then(res => console.log(res))
// async2 




Function.prototype.mycall = function (thisArg, ...args) {
  let context;
  if (thisArg === null || thisArg === undefined) {
    context = window;
  } else {
    context = Object(thisArg)
  }

  const symbolCall = Symbol('call')
  context[symbolCall] = this;
  const result = context[symbolCall](...args)

  delete context[symbolCall]
  return result
}




function fn(arr = []) {
  let result = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result.push(...fn(item));
    } else {
      result.push(item);
    }
  })
  return result
}

// 实现eventBus
class EventBus {
  constructor() {
    this.eventList = new Map();
  }

  on(type, fn) {
    const list = this.eventList.get(type);
    if (Array.isArray(list)) {
      list.push(fn);
    } else {
      list = [fn]
    }
  }

  off(type, fn) {
    const list = this.eventList.get(type) || [];
    const fnIndex = list.findIndex(e => e === fn);
    if (fnIndex !== -1) {
      list.splice(fnIndex, 1)
    }
  }

  emit(type, ...args) {
    const list = this.eventList.get(type) || [];
    list.forEach(fn => {
      fn.apply(this, args)
    })
  }
}


// curry
function curry(fn) {

}












