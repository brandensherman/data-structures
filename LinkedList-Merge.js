class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Push a value to a SinglyLinkedList
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
}

let listOne = new SinglyLinkedList();
let listTwo = new SinglyLinkedList();

listOne.push(1);
listOne.push(3);
listOne.push(4);
listOne.push(8);

listTwo.push(2);
listTwo.push(5);
listTwo.push(6);
listTwo.push(12);

function mergeLinkedLists(headOne, headTwo) {
  let listOne = headOne;
  let mergedList = null; // this will start with headThree
  let listTwo = headTwo;
  let count = 0;
  while (listOne !== null && listTwo !== null) {
    // as long as we did not start with one value as null and until we end with one of the values as null
    if (listOne.val < listTwo.val) {
      // if headOne is less than headTwo - initially - values will be swapped afterwards accordingly
      mergedList = listOne; // mergedList will start with headOne
      listOne = listOne.next; // the value of listOne will be changed to the next value (headOne.next - first iteration)
    } else {
      // if listTwo.value is greater than listOne.value we go to this statement
      if (mergedList !== null) {
        // as long as mergedList is not null mergedList.next will be the current value of listTwo
        mergedList.next = listTwo;
      }
      mergedList = listTwo; // otherwise if mergedList does equal null - mergedList will be equal to listTwo (headTwo - first iteration)
      listTwo = listTwo.next; // the value of listTwo will be changed to the next value (headTwo.next - first iteration)
      mergedList.next = listOne; // mergedList.next will equal the current value of listOne
    }
  }

  if (listOne === null) {
    // if listOne is equal to null after the while loop - mergedList.next will be the current value of listTwo
    mergedList.next = listTwo;
  }

  if (headOne.val < headTwo.val) {
    console.log('---HEADONE---', headOne);
  } else {
    console.log('---HEADTWO---', headTwo);
  }

  return headOne.val < headTwo.val ? headOne : headTwo;
  // the beginning of the list will always be either headOne or headTwo
}

mergeLinkedLists(listOne.head, listTwo.head);

// function mergeLinkedLists(headOne, headTwo) {
//   recursiveMerge(headOne, headTwo, null);
//   console.log(headOne);
//   return headOne.val < headTwo.val ? headOne : headTwo;
//   // the beginning of the list will always be either headOne or headTwo
// }

// function recursiveMerge(p1, p2, p1Prev) {
//   if (p1 === null) {
//     // if p1 is equal to null - p1Prev.next will be the current value of p2
//     p1Prev.next = p2;
//     // console.log(p1Prev);
//     // if that value is null than we will reach the end of the linked list
//     return;
//   }
//   if (p2 === null) {
//     return;
//   } // this will signify that we have reached the end of the linked list

//   if (p1.val < p2.val) {
//     // if p1 is less than p2 - call recursiveMerge using p1.next
//     recursiveMerge(p1.next, p2, p1);
//   } else {
//     // if p2.value is greater than p1.value we go to this statement
//     if (p1Prev !== null) {
//       // as long as p1Prev is not null p1Prev.next will be the current value of p2
//       p1Prev.next = p2;
//     }
//     const newP2 = p2.next;
//     p2.next = p1;

//     recursiveMerge(p1, newP2, p2);
//   }
// }

// mergeLinkedLists(listOne.head, listTwo.head);
