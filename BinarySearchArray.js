function binarySearch(arr, target) {
  // initiate variables to be used in the search
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  // while the middle index does not equal the target
  while (arr[middle] !== target) {
    if (target < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  console.log(start, middle, end);
}

binarySearch([1, 2, 5, 9, 13, 15, 28, 43, 47, 53], 5);
