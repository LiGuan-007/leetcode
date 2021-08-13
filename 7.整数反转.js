/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const r = `${x < 0 ? '-' : ''}${x.toString().replace('-', '').split('').reverse().join('')}` * 1;
  return (r >= Math.pow(-2, 31) && r <= Math.pow(2, 31) - 1) ? r : 0;
};
// @lc code=end

