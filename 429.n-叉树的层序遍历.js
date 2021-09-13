/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {

  let result = []

  function getLeval(node, leval) {
    if (!node) return;
    // console.log(node)
    result[leval] = result[leval] || [];

    result[leval].push(node.val);
    (node.children || []).forEach((child) => {
      getLeval(child, leval + 1)
    })

  }

  getLeval(root, 0)
  return result

};
// @lc code=end

