/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  let l = nums.length;
  let r = 0;
  if (l < 2) {
    return r
  }

  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < l - 1; i++) {
    r = Math.max(r, nums[i + 1] - nums[i]);
  }
  return r
};
// @lc code=end

