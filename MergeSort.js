// Split an array into smaller arrays of 0 or 1 elements
// Build up those array into a newly sorted array
// Time: O(n log n)  ----  Space: O(n)

// Merge sort will always split regardless if the array is partially sorted

// As n grows the number of times we split it up grows at the rate of log n

// Each time we merge there are O(n) comparisons - the amount of comparisons that need to be made will always be equal to n

function merge(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // while the left index is less than the length of the left array and the right index is less than the length of the right array
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      // if the current left index is greater than the current right index - increment left index
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      // if the current right index is greater than the current left index - increment right index
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Because one of the arrays may end first we need to run the while loops to account for th edge case
  while (leftIndex < left.length) {
    merged.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    merged.push(right[rightIndex]);
    rightIndex++;
  }

  console.log(merged);
  return merged;
}

// merge([1, 10, 50], [2, 14, 99, 100]);

function split(array) {
  // Split the given array into two halves
  const center = array.length / 2;
  let left = array.slice(0, center);
  let right = array.slice(center);
  // Send back as an array so that it can be used in mergeSort
  return [left, right];
}

function mergeSort(array) {
  // Base case
  if (array.length <= 1) return array;

  // Split the array using the split helper function and separate into two variables
  const splitArray = split(array);
  let left = splitArray[0];
  let right = splitArray[1];

  // use the merge helper function to pass in mergeSort recursively for each half of the array
  return merge(mergeSort(left), mergeSort(right));
}

mergeSort([10, 76, 25, 28, 39, 43, 50]);
