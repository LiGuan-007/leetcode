


// 参考
// https://juejin.cn/post/6844903444365443080

let testArr = [1, 2, 5, 6, 8, 2, 123, 34, 212, 5, 0, -3, 12, 12, 3, 9, 0, 99];

/**
 * 快排
 * @param {*} arr 
 * @returns 
 */
function quickSort(arr) {
  if (!arr.length) return []

  let [flag] = arr.splice(0, 1);
  let left = [];
  let right = [];

  arr.forEach((item) => {
    if (item < flag) {
      left.push(item)
    } else {
      right.push(item)
    }
  })

  return [...quickSort(left), flag, ...quickSort(right)]
}

// console.log(quickSort(testArr))


/**
 * 归并排序
 * @param {*} arr 
 */
function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let middle = Math.floor(arr.length / 2);

  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {

  let res = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      res.push(right.shift())
    } else {
      res.push(left.shift())
    }
  }

  return res.concat(left).concat(right)
}

// console.log(mergeSort(testArr))




