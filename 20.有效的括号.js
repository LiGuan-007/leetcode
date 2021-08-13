/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

  if (s.length % 2 === 1) return false;

  const matchMap = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ]);

  const stk = [];

  for (let ch of s) {
    const stkLength = stk.length;
    if (stkLength && stk[stkLength - 1] === matchMap.get(ch)) {
      stk.pop();
    } else {
      stk.push(ch);
    }
  }

  return !stk.length;

};
// @lc code=end

