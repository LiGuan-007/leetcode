/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {

  let map = new Map()

  for (let i = 0; i < s.length; i++) {
    const repeat = map.has(s[i])
    const temp = { i, repeat }
    map.set(s[i], temp)
  }


  for (let mapVal of map.values()) {
    const { i, repeat } = mapVal;
    if (!repeat) {
      return i
    }
  }

  return -1
};
// @lc code=end

