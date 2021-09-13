/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const maxLength = Math.max(num1.length, num2.length);
  num1 = '0'.repeat(maxLength - num1.length) + num1;
  num2 = '0'.repeat(maxLength - num2.length) + num2;


  let flag = 0;

  let res = '';

  let i = maxLength - 1;

  while (i >= 0) {
    let sum = +num1[i] + +num2[i] + flag;
    flag = sum >= 10 ? 1 : 0
    res = `${sum % 10}${res}`

    if (i === 0 && flag === 1) {
      res = '1' + res
    }
    i--;
  }

  return res
};
// @lc code=end

