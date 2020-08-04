// Bubble Sort - largest values bubble to the top
// Start at the end of the array and limit the number of comparisons in the inner loop
// As i goes down, so does j
// Time: O(n2) - n squared ----  Space: O(1)
function bubbleSort(arr) {
  let sorted;
  for (let i = arr.length; i > 0; i--) {
    sorted = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      // Swap if the next number is less than the current
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        sorted = false;
      }
    }
    console.log('PASS COMPLETE');
    if (sorted) break;
  }

  return arr;
}

bubbleSort([2, 37, 29, 45, 8, 16]);
// bubbleSort([8, 1, 2, 3, 4, 5, 6]);

// const swap = (arr, index1, index2) => {
//   [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
// };

// const bubbleSort = (arr) => {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//     console.log('PASS COMPLETE');
//   }

//   return arr;
// };

// bubbleSort([37, 45, 29, 8, 16]);
