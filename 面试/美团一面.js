// 跑腿业务
// 1、bfs
// 2、compose
// 3、实现100个1-100的随机数
// 4、hashmap碰撞
// 5、PB协议




// 1、bfs
function bfs(node) {
  let result = [];
  let stack = [];

  if (node) {
    stack.push(node);

    while (stack.length) {
      let current = stack.shift();

      result.push(current.value);

      result.left && stack.push(result.left);
      result.right && stack.push(result.right);
    }

  }
  return result
}

// 2、compose
function compose(...fns) {

  let length = fns.length;
  let curr = length - 1;
  let result;

  return function exe(...args) {
    result = fns[curr].apply(this, args)

    if (curr <= 0) {
      return result
    } else {
      curr--;
      return exe.call(this, result)
    }
  }
}
function testCompose() {
  let init = (...args) => args.reduce((ele1, ele2) => ele1 + ele2, 0)
  let step2 = (val) => val + 2
  let step3 = (val) => val + 3
  let step4 = (val) => val + 4

  let steps = [step4, step3, step2, init]

  let composeFunc = compose(...steps)

  console.log(composeFunc())
  console.log(composeFunc(1, 2, 3))
}

// testCompose()



// 3、随机数
function getRandom(start, end) {
  return Math.round(Math.random() * (end - start) + start)
}

function get100() {
  let pool = [];
  let result = []
  for (let i = 0; i < 100; i++) {
    pool[i] = i + 1
  }

  while (pool.length >= 0) {
    const randomIndex = getRandom(0, pool.length);

    result.push(...pool.splice(randomIndex, 1))
    if (!pool.length) {
      break;
    }
  }

  return result
}
console.log(get100())
