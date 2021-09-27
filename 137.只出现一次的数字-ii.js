/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let _nums = [...new Set(nums)];

  let sum1 = 0;
  let sum2 = 0;

  for(let i = 0; i < nums.length; i++){
      sum1 += nums[i]
  }

  for(let i = 0; i < _nums.length; i++){
      sum2 += _nums[i]
  }

  return (sum2 * 3 - sum1) / 2
};
// @lc code=end

