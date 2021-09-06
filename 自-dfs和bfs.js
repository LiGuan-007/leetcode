
// https://www.jianshu.com/p/1e6f0228211e
// https://upload-images.jianshu.io/upload_images/16557061-e2e1efb766219d2a.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/926/format/webp
const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: {
        value: 8,
      },
      right: {
        value: 9
      }
    },
    right: {
      value: 5,
      left: {
        value: 10,
      },
      right: {
        value: 11
      }
    }
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: {
        value: 12
      }
    },
    right: {
      value: 7
    }
  }
}



// dfs 深度优先搜索
function dfs(root) {
  if (!root) {
    return []
  }
  let result = [];

  result.push(root.value);
  result.push(...dfs(root.left));
  result.push(...dfs(root.right));

  return result;
}

// console.log(dfs(tree))

// bfs
function bfs(node) {
  let result = [];
  let stack = [];

  if (node) {

    stack.push(node);

    while (stack.length) {
      let current = stack.shift();
      result.push(current.value);

      if (current.left) {
        stack.push(current.left)
      }
      if (current.right) {
        stack.push(current.right)
      }
    }

  }

  return result
}

// console.log(bfs(tree))


// 二叉树层次遍历
function levalBfs(root) {
  let result = [];

  function order(node, leval) {
    if (!node) return

    result[leval] = result[leval] || [];
    result[leval].push(node.value);

    order(node.left, leval + 1)
    order(node.right, leval + 1)

  }
  order(root, 0)
  return result
}

console.log(snackBfs(tree))
