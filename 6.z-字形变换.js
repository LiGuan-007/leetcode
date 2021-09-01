/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

  let r = [];
  for (let i = 0; i < numRows; i++) {
    r[i] = '';
  }

  let flag;
  let currLineIndex = 0

  for (let i = 0; i < s.length; i++) {

    if (!r[currLineIndex]) {
      r[currLineIndex] = ''
    }

    r[currLineIndex] += s[i]

    // 变换方向
    if (currLineIndex === 0) {
      flag = true;
    } else if (currLineIndex === numRows - 1) {
      flag = false;
    }

    if (flag) {
      currLineIndex++;
    } else {
      currLineIndex--;
    }
  }
  return r.join('')
};
// @lc code=end

