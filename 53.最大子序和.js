/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0;
  let ans = nums[0];
  nums.forEach((curr) => {
    // 如果前面的最大和都没有自己大，则丢弃前面的和
    pre = Math.max(pre + curr, curr);
    ans = Math.max(pre, ans)
  })
  return ans;
};
// @lc code=end

