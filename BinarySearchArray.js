// BIG O -> O(log n)
// the array is assumed to be already sorted and will continuously split in half after each iteration of the while loop
// logarithms - 2 to what power gives us n? How many times do we need to split the array until we reach n?

function binarySearch(arr, target) {
  // state variables to be used in the search
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  // while the middle index does not equal the target
  // and the start does not become greater than the end
  // (in the case of the target being found)
  while (arr[middle] !== target && start <= end) {
    if (target < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  // if the middle is equal to the target -> return the middle -> else return -1
  if (arr[middle] === target) {
    return arr[middle];
  } else {
    return -1;
  }
}

binarySearch([1, 2, 5, 9, 13, 15, 28, 43, 47, 53], 103);
