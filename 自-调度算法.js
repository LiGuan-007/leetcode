class FIFO {
  constructor(limit) {
    this.limit = limit || 1;
    this.stack = new Set();
  }

  add(task) {
    console.log('addTask', task);
    if (this.stack.has(task)) {
      return;
    }
    if (this.stack.size >= this.limit) {
      this.remove();
    }
    this.stack.add(task);
    console.log('afterAddTask', this.stack);
  }

  // 去除最先进来的
  remove() {
    const [first, ...rest] = [...this.stack]
    this.stack = new Set(rest);
  }
}
// let task = [1, 2, 4, 4, 2, 1, 3, 5, 1, 2, 3, 7]
// let testFIFO = new FIFO(3);

// task.forEach(item => { testFIFO.add(item) });


class LRU {
  constructor(limit) {
    this.limit = limit || 1;
    this.stack = new Set();
  }

  add(task) {
    if (this.stack.size < this.limit) {
      this.stack.add(task)
      return
    }

    if (this.stack.has(task)) {
      this.stack.delete(task);
      this.stack.add(task);
    } else {
      this.removeFirst()
      this.add(task)
    }

  }

  removeFirst() {
    const [first, ...rest] = [...this.stack]
    this.stack = new Set(rest);
  }

}

