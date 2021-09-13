// 1.实现斐波那契数列

// 2.实现模版字符串render
// const template = '嗨，{{ info.name.value }}您好，今天是星期 {{ day.value }}, 天气{{ weather.info.state }}';
// const data = {
//   info: {
//     name: {
//       value: '张三'
//     }
//   },
//   day: {
//     value: '三'
//   },
//   weather: {
//     info: {
//       state: '晴'
//     }
//   }
// };
// render(template, data); // 嗨，张三您好，今天是星期三, 天气晴


// 3.实现Object.assign
// 4.事件循环机制
// 5.事件循环与渲染的关系
// 6.this指向
// var x = 11;
// var obj = {
//   x: 22,
//   methods: {

//     x: 33,
//     say: function () { console.log(this.x) },
//     say2: function () {
//       let s = () => { console.log(this.x) }
//       return s;
//     },
//     say3: () => { console.log(this.x) }
//   }
// }

// obj.methods.say();
// let s2 = obj.methods.say2();
// s2()
// let s2_1 = obj.methods.say2;
// s2_1()()
// obj.methods.say3();