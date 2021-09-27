/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let max = 0;

  for (let i = 0; i < words.length - 1; i++) {
    let setI = new Set(words[i].split(''));

    for (let j = i + 1; j < words.length; j++) {

      let setJ = new Set(words[j].split(''));

      let setMerge = new Set([...setI].concat([...setJ]))

      if (setMerge.size === (setI.size + setJ.size)) {
        max = Math.max(max, words[i].length * words[j].length)
      }
    }

  }

  return max;
};
// @lc code=end

