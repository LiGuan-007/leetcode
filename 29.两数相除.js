/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  // 正负号
  const flag = (dividend >= 0 && divisor >= 0) || (dividend < 0 && divisor <= 0)

  // 转化为正数
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let base = 1;
  let res = 0;

  while (dividend >= divisor) {

    res += base;

    dividend -= (divisor * base);

    if (dividend >= (divisor * base * 2)) {
      base *= 2
    } else if (dividend >= (divisor * base)) {
      base = base
    } else {
      base = 1;
    }
  }

  res = flag ? res : -res;

  return (res >= Math.pow(-2, 31) && res <= Math.pow(2, 31) - 1) ? res : Math.pow(2, 31) - 1

};
// @lc code=end

