/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

  const inset = (s = '') => {
    const t = [];
    const sLength = s.length;

    for (let i = 0; i <= sLength; i++) {
      t.push(`${s.substring(0, i)}()${s.substring(i)}`)
    }

    return [...new Set(t)]
  }

  const resMap = new Map([
    [1, ['()']]
  ]);


  if (n === 0) return [];


  for (let i = 2; i <= n; i++) {
    resMap.set(i, resMap.get(i - 1).reduce((pre, curr) => {
      pre.push(...inset(curr))
      return [...new Set(pre)]
    }, []));
  }


  return resMap.get(n);



};
// @lc code=end

