var testArr = [1, '1', 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];

// 1、set
function unique_set(arr = []) {
  return [...new Set(arr)];
}

// 2、indexOf
function unique_indexOf(arr = []) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i])
    }
  }
  return result;
}

// 3、includes
function unique_includes(arr = []) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  return result;
}

// 4、sort
function unique_sort(arr = []) {
  arr = arr.sort();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      result.push(arr[i])
    }
  }
  return result;
}

// 5、filter
function unique_filter(arr = []) {
  return arr.filter((item, index, array) => {
    return array.indexOf(item, 0) === index
  })
}

// 6、hasOwnProperty
function unique_hasOwnProperty(arr = []) {
  let obj = {};
  return arr.filter((item, index, array) => {
    if (obj.hasOwnProperty(typeof item + item)) {
      return false
    } else {
      obj[typeof item + item] = true
      return true
    }
  })
}

// 7、map
function unique_map(arr = []) {
  let hashMap = new Map();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (hashMap.has(arr[i])) { // 判断 hashMap 中是否已有该 key 值
      hashMap.set(arr[i], true);  // 后面的true 代表该 key 值在原始数组中重复了，false反之
    } else {  // 如果 hashMap 中没有该 key 值，添加
      hashMap.set(arr[i], false);
      result.push(arr[i]);
    }
  }
  return result;
}