/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let arr = Array.from(s)

  for (let i = 0; i <= Math.floor(arr.length / (2 * k)) + 1; i++) {
    // if (s)
    const start = i * 2 * k;
    const end = (i + 1) * 2 * k - 1;
    const middle = (2 * i + 1) * k - 1

    // console.log(start, end, middle)
    if (arr[end]) {
      const subarr = arr.slice(start, middle + 1).reverse()
      arr.splice(start, k, ...subarr)

    } else if (arr[middle]) {
      const subarr = arr.slice(start, middle + 1).reverse()
      // console.log(subarr)
      arr.splice(start, k, ...subarr)

    } else {
      const subarr = arr.slice(start).reverse()
      arr.splice(start, k, ...subarr)

    }


  }
  return arr.join('')


};
// @lc code=end

