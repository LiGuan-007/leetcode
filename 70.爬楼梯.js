/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 数组存储
  // let arr = [1, 1, 2];
  // for (let i = 2; i <= n; i++) {
  //   arr[i] = arr[i - 1] + arr[i - 2]
  // }
  // return arr[n]


  // 变量存储
  if (n <= 2) {
    return n;
  }
  let n_2 = 1;
  let n_1 = 2;
  let sum = 0;
  for (let i = 3; i <= n; i++) {
    sum = n_2 + n_1;
    n_2 = n_1;
    n_1 = sum;
  }
  return sum;
};
// @lc code=end

