/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let l_a = a.length;
  let l_b = b.length;
  let max = Math.max(l_a, l_b);
  a = '0'.repeat(max - l_a) + a;
  b = '0'.repeat(max - l_b) + b;

  let res = '';
  let flag = 0;
  while (max > 0) {
    let r = +a[max - 1] + +b[max - 1] + flag;
    flag = r >= 2 ? 1 : 0;
    res = `${r % 2}${res}`;
    max--;

    if (max === 0 && flag === 1) {
      res = `${flag}${res}`
    }
  }
  return res
};
// @lc code=end

