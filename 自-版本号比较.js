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

    const map = new Map([
        ['rc', -1],
        ['brta', -2],
        ['alpha', -3]
    ])
    const isNum = (s) => /[0-9]+/.test(s);

    const arrA = a.split('.');
    const arrB = b.split('.');
    const maxL = Math.max(arrA.length, arrB.length);

    let i = 0;
    while (i < maxL) {
        const ai = isNum(arrA[i] || 0) ? (arrA[i] || 0) * 1 : map.get(arrA[i]);
        const bi = isNum(arrB[i] || 0) ? (arrB[i] || 0) * 1 : map.get(arrB[i]);
        if (ai === bi) {
            i++
        } else {
            return ai > bi ? 1 : -1
        }
    }
    return 0
}


console.log(compare('1.31.0.beta.1', '1.21.0.beta.1'))