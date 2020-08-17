// Bubble Sort - largest values bubble to the top
// Start at the end of the array and limit the number of comparisons in the inner loop
// As i goes down, so does j
// Time: O(n2) - n squared ----  Space: O(1)

// Because we are using nested for loops the time it will take to run through this
// algorithm will be the square of the size of the input

function bubbleSort(arr) {
  let sorted;
  for (let i = arr.length; i > 0; i--) {
    sorted = true;
    for (let j = 0; j < i - 1; j++) {
      // Swap if the next number is less than the current
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        sorted = false;
      }
    }
    if (sorted) break;
  }

  return arr;
}

bubbleSort([2, 37, 29, 45, 8, 16]);

// ----- Alternative solution using a swap helper function

// function swap(arr, index1, index2) {
//   [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
// };

// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }

//   return arr;
// };

// bubbleSort([37, 45, 29, 8, 16]);
