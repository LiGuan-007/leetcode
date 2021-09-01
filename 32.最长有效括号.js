/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let length = s.length;


  let arr = [0];
  for (let i = 1; i < length; i++) {

    if (s[i] === ')' && s[arr[arr.length - 1]] === '(') {
      arr.pop()

    } else {
      arr.push(i)
    }
  }

  let result = []

  for (let i = 0; i < length; i++) {
    if (arr.includes(i)) {
      result.push(false)
    } else {
      result.push(true)
    }
  }

  console.log(result)

  let max = 0
  result.reduce((pre, curr) => {
    if (curr) {
      pre++
      max = Math.max(max, pre)

    } else {

      max = Math.max(max, pre)
      pre = 0
    }
    return pre
  }, 0)
  return max

};
// @lc code=end

