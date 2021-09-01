/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 * 
 * 中心法则
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s[0] || '';
  }
  let maxLength = 1;
  let startIndex = 0;
  function func(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        startIndex = left;
        maxLength = right - left + 1
      }
      left--;
      right++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    func(i - 1, i + 1);
    func(i, i + 1);
  }
  return s.substr(startIndex, maxLength)
};


// 窗口移动大法
// 窗口长度从1开始，最大长度为字符串长度
// 判断当前长度是否有回文字串
// 如果有，记录当前长度第一次出现的回文字串，窗口长度+1
// 如果连续两个窗口长度没有回文字串，则没有更长的回文字串

// var longestPalindrome = function (s) {
//   const sLength = s.length;
//   let winLength = 1;
//   let result = '';
//   while (winLength <= sLength) {
//     for (let i = 0; i <= sLength - winLength; i++) {
//       const currStr = s.substr(i, winLength);
//       if (currStr === currStr.split('').reverse().join('')) {
//         result = currStr;
//         break;
//       }
//     }
//     if (winLength - result.length == 2) {
//       break;
//     } else {
//       winLength++;
//     }
//   }
//   return result;
// };

// @lc code=end

