/*
 * @lc app=leetcode.cn id=1646 lang=javascript
 *
 * [1646] 获取生成数组中的最大值
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {

  const arr = [0, 1];

  if (n < 2) {
    return arr[n];
  }
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      arr[i] = arr[i / 2]
    } else {
      arr[i] = arr[(i - 1) / 2] + arr[(i + 1) / 2]
    }
  }
  return Math.max(...arr)

};
// @lc code=end

