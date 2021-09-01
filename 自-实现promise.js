
const PENDING = 'pending';
const REJECTED = 'rejected';
const FULFILLED = 'fulfilled';

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const reslove = (value) => {
      // pending最屏蔽的，resolve和reject只能调用一个，不能同时调用，这就是pending的作用
      if (this.status == PENDING) {
        this.status = RESOLVED
        this.value = value
        // 发布执行函数
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }

    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    try {
      executor(reslove, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulFilled, onReject) {
    onFulFilled = onFulFilled ? onFulFilled : data => data;
    onReject = onReject ? onReject : err => { throw err };

    const promise = new MyPromise((resolve, reject) => {

    })

    return promise;

  }
}