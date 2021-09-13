function BinarySearch(arr = [], target) {
  if (!arr.length) { return -1 }

  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((endIndex + startIndex) / 2);

    if (arr[middleIndex] > target) {
      endIndex = middleIndex - 1;
    } else if (arr[middleIndex] < target) {
      startIndex = middleIndex + 1;
    } else if (arr[middleIndex] === target) {
      return middleIndex
    }
  }

  return -1;
}

const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102]
console.log(BinarySearch(arr, 44))
console.log(BinarySearch(arr, 1))
console.log(BinarySearch(arr, 102))
console.log(BinarySearch(arr, 1111))

