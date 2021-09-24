// 实现promise.finally


Promise.prototype._fianlly = function (cb) {
  cb = typeof cb === 'function' ? cb : () => { }

  const _constructor = this.constructor;

  return this.then(
    data => { return _constructor.resolve(cb()).then(() => data) },
    err => { return _constructor.resolve(cb()).then(() => { throw err }) }
  )
}


// 实现promise.all
Promise._all = function (arr = []) {
  return new Promise((resolve, reject) => {
    let result = [];
    const length = arr.length;
    let finished = 0;
    for (let i = 0; i < length; i++) {
      Promise.resolve(arr[i]).then(data => {
        result[i] = data;
        finished++;
        if (finished === length) {
          return resolve(result)
        }
      }, err => {
        return reject(err)
      })
    }
  })
}

Promise._race = function (arr = []) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]).then(
        data => { return resolve(data) },
        err => { throw err }
      )
    }
  })
}



let p1 = () => {
  setTimeout(() => {
    console.log('p1', 500)
  }, 3500)
}

let p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('p2', 300)
      resolve('resolve', 300)
    }, 3300)
  })
}

let p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('p2', 700)
      resolve('resolve', 700)
    }, 3700)
  })
}

let p4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('p4', 1700)
      reject('reject', 1700)
    }, 100)
  })
}



// Promise.all([p1(), p2(), p3(), p4()]).then(
//   data => { console.log('success1', data) },
//   err => { console.log('fail', err) }
// )


// Promise._all([p1(), p2(), p3()], p4()).then(
//   data => { console.log('success2', data) },
//   err => { console.log('fail', err) }
// )

// Promise.race([p2(), p3(), p4()]).then(
//   data => { console.log('success1', data) },
//   err => { console.log('racefail1', err) }
// )
// Promise._race([p2(), p3(), p4()]).then(
//   data => { console.log('success2', data) },
//   err => { console.log('racefail2', err) }
// )



Promise.resolve(
  new Promise(resolve => {
    setTimeout(() => { console.log(111), resolve(111) }, 1000)
  })
).then((data) => {
  console.log('data', data)
})


