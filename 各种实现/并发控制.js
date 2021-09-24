class Scheduler {
    constructor(limit) {
        // 最大并行数
        this.max = limit || 1;
        // 正在执行任务队列
        this.running = [];
        // 等待执行任务队列
        this.waiting = [];
    }

    add(promiseTask) {
        return new Promise((resolve, reject) => {
            // 存储当前返回promise的resolve
            promiseTask.resolve = resolve;

            if (this.running.length < this.max) {
                this.run(promiseTask)
            } else {
                this.waiting.push(promiseTask)
            }
        })

    }

    run(promiseTask) {
        // 任务加入执行队列
        this.running.push(promiseTask);

        promiseTask().then((data) => {
            // 调用当前任务对应的的resolve，改变返回的promise状态
            promiseTask.resolve(data);

            // 从执行队列中删除当前任务
            const index = this.running.findIndex(promiseTask)
            this.running.splice(index, 1);

            // 是否还有等待任务
            if (this.waiting.length) {
                this.run(this.waiting.shift())
            }
        })

    }
}


const timeout = (delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(delay);
        }, delay)
    })
}

const scheduler = new Scheduler(4);

scheduler.add(() => timeout(9000)).then(data => console.log(data))
scheduler.add(() => timeout(2000)).then(data => console.log(data))
scheduler.add(() => timeout(3000)).then(data => console.log(data))
scheduler.add(() => timeout(900)).then(data => console.log(data))

