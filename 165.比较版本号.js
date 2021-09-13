/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let v1 = version1.split('.');
  let v2 = version2.split('.');


  const max = Math.max(v1.length, v2.length)

  let i = 0;

  while (i < max) {
    let num1 = (v1[i] || 0) * 1;
    let num2 = (v2[i] || 0) * 1;

    if (num1 > num2) return 1
    if (num2 > num1) return -1

    i++
  }

  return 0
};
// @lc code=end

