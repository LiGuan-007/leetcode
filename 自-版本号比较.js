// 代码问题，版本号
// ## Semantic Versioning 是一个前端通用的版本规范。格式为“{MAJOR}.{MINOR}.{PATCH}-{alpha|beta|rc}.{number}”，要求实现 compare(a, b) 方法，比较 a, b 两个版本大小，
// 1. 当 a > b 是返回 1；
// 2. 当 a = b 是返回 0；
// 3. 当 a < b 是返回 -1；
// 4. 其中，rc > beta > alpha；
// 5. MAJOR、MINOR、PATCH分别代表是版本号不同位置，MAJOR > MINOR > PATCH
// 6. 例子，1.2.3 < 1.2.4 < 1.3.0.alpha.1 < 1.3.0.alpha.2 < 1.3.0.beta.1 < 1.3.0.rc.1 < 1.3.0

// 1.2.3.4    1.2.3.5


// alpha.1 < alpha.2



const compare = (a = '', b = '') => {
    const arrA = a.split('.');
    const arrB = b.split('.');
    const maxL = Math.max(a.length, b.length);
    const preMap = new Map([
        ['alpha', -0.999],
        ['beta', -0.99],
        ['rc', -0.9]
    ])

    const getValue = (arr = []) => {
        return arr.reduce((pre, curr, index) => {
            const item = /[0-9]+/.test(curr) ? curr * 1 : preMap.get(curr);
            pre = pre + item * Math.pow(10, maxL - index)
            return pre
        }, 0)

    }
    const ar = getValue(arrA);
    const br = getValue(arrB);

    if (ar === br) {
        return 0
    }
    if (ar > br) {
        return 1
    }
    return -1

}


console.log(compare('alpha.1', 'rc.2'))