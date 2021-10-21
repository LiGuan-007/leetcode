// 参考 https://juejin.cn/post/6844904161071333384


/**
 * 原型链继承
 * 基本思想：利用原型让一个引用类型继承另一个引用类型的属性和方法
 * 问题： 引用类型的属性被所有实例共享；在创建Child的实例的时候，不能向Parent传参
 */
// function Parent() {
//   this.name = 'Parent';
//   this.children = ['A', 'B'];
// }
// Parent.prototype.getChildren = function () {
//   return this.children;
// }

// function Child() { }
// Child.prototype = new Parent();

// var child1 = new Child();
// child1.children.push('child1');
// console.log(child1.getChildren()); // [ 'A', 'B', 'child1' ]

// var child2 = new Child();
// child1.children.push('child2');
// console.log(child2.getChildren()); // [ 'A', 'B', 'child1', 'child2' ]



/**
 * 借用构造函数
 * 优点： 避免了引用类型的属性被所有实例共享; 可以直接在Child中向Parent传参
 * 缺点： 方法都在构造函数中定义了，每次创建实例都会创建一遍方法，函数复用就无从谈起了
 */
// function Parent(age) {
//   this.age = age;
//   this.names = ['lucy', 'tom'];

//   this.getName = function () {
//     return this.names;
//   }
//   this.getAge = function () {
//     return this.age;
//   }
// }

// function Child(age) {
//   Parent.call(this, age);
// }

// var child1 = new Child(10);
// child1.names.push('child1')
// console.log(child1.getName())
// console.log(child1.getAge())

// var child2 = new Child(20)
// child2.names.push('child2')
// console.log(child2.getName())
// console.log(child2.getAge())


/**
 * 组合继承
 * 组合继承既具有原型链继承能够复用函数的特性，又有借用构造函数方式能够保证每个子类实例能够拥有自己的属性以及向超类传参的特性，
 * 但组合继承也并不是完美实现继承的方式，因为这种方式在创建子类时会调用两次超类的构造函数。
 */
// function Parent(name, age) {
//   this.name = name;
//   this.age = age;
//   this.color = ['red', 'green']
// }
// Parent.prototype.getColor = function () {
//   return this.color;
// }

// function Child(name, age, grade) {
//   Parent.call(this, name, age); // 创建子类原型会执行一次
//   this.grade = grade
// }
// Child.prototype = new Parent(); // 指定子类原型会执行一次
// Child.prototype.constructor = Child;

// var child1 = new Child('child1', 10, 1);
// child1.color.push('black')
// console.log(child1.getColor())

// var child2 = new Child('child2', 20, 2)
// child2.color.push('white')
// console.log(child2.getColor())




/**
 * 原型式继承
 * 这种方法并没有使用严格意义上的构造函数，思想是借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型
 * 
 */
// 实现object.create()
// function objectCreate(o) {
//   function F() { }
//   F.prototype = o;
//   return new F()
// }
// var person = {
//   name: 'parsonName',
//   friends: ['tom', 'lucy']
// }

// var p1 = objectCreate(person);
// p1.name = 'p1';
// p1.friends.push('p1')
// console.log(p1.name)
// console.log(p1.friends); // [ 'tom', 'lucy', 'p1' ]

// var p2 = objectCreate(person);
// p2.name = 'p2';
// p2.friends.push('p2')
// console.log(p2.name)
// console.log(p2.friends); // [ 'tom', 'lucy', 'p1', 'p2' ]



/**
 * 寄生式继承
 * 
 */
function createAnother(origin) {
  var o = Object.create(origin);
  o.say = function () {
    console.log('hello')
  }
}
var person = {
  name: 'parsonName',
  friends: ['tom', 'lucy']
}


var p1 = createAnother(person);

