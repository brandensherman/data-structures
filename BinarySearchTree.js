// BINARY SEARCH TREES

class BinarySearchTree {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.magnitude = 1;
  }

  insert(val) {
    this.magnitude++;
    if (val < this.value) {
      // left case
      if (this.left) {
        this.left.insert(val);
      } else {
        this.left = new BinarySearchTree(val);
      }
    } else {
      // right case
      if (this.right) {
        this.right.insert(val);
      } else {
        this.right = new BinarySearchTree(val);
      }
    }
  }

  find(val) {
    if (this.value === val) return true;
    if (val < this.value) {
      // left case
      if (this.left) {
        return this.left.find(val);
      } else {
        return false;
      }
    } else {
      // right case
      if (this.right) {
        return this.right.find(val);
      } else {
        return false;
      }
    }
  }
}

let tree = new BinarySearchTree(20);

tree.insert(10);
tree.insert(36);
tree.insert(2);
console.log(tree.find(8));
tree.insert(8);
tree.insert(45);
console.log(tree.find(8));

console.log(tree);
