class Animals {
  constructor(name) {
    this.name = name
  }
  // 静态方法 不可被继承
  static sayName() {
    console.log('sayName', this.name)
  }
  // 实例方法  可被继承
  run() {
    console.log('run')
  }
}

class Dog extends Animals {
  constructor(name) {
    // 调用 父对象/父类 的构造函数
    super(name)
    this.type = 'DOG'
  }
}