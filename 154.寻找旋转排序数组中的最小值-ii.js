/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let length = nums.length;

  let i = 0;

  while (i < length - 1) {
    if (nums[i] > nums[i + 1]) {
      return nums[i + 1]
    } else {
      i++;
    }
  }

  return nums[0]
};
// @lc code=end

