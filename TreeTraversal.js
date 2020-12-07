function node(value) {
  return {
    value,
    children: [],
  };
}
let a = node('a');
let b = node('b');
let c = node('c');
let d = node('d');
let e = node('e');
let f = node('f');
let g = node('g');
let h = node('h');
let i = node('i');
let j = node('j');
let k = node('k');
let l = node('l');
let m = node('m');

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);

const logger = (value) => {
  console.log(value);
};

// breadthFirst	[A B C D E F G H I J K L M]
// Each "level" of the tree is printed in order
// first explore all the nodes one step away, then all the nodes two steps away, etc.

const breadthFirst = (startingNode, callback) => {
  // Begin with an array that contains the starting node (a)
  const queue = [startingNode];

  // Create a while loop - while there is at least 1 node in the array - execute the loop
  while (queue.length) {
    // The current node is the first node in the array
    const node = queue.shift();

    // Print the node  - we are just moving through the Tree and printing values
    callback(node.value);

    // Push the children of that node into the array - when there are no more children the array will equal zero and the loop will stop
    queue.push(...node.children);
  }
};

// breadthFirst(a, logger);

// depthFirstPreOrder	[A B E K L C F G H M D I J]
// Children nodes are visited before sibling nodes
// go as deep as possible down one path before backing up and trying a different one.

const depthFirstPreOrder = (startingNode, callback) => {
  // Print the node - startingNode will be A
  callback(startingNode.value);

  // Iterate through each child of the startingNode
  for (let child of startingNode.children) {
    // recursively call depthFirstPreOrder on each child in order to print each of the children's respective children
    depthFirstPreOrder(child, callback);
  }
};

// depthFirstPreOrder(a, logger);

// depthFirstPostOrder	[K L E B F G M H C I J D A]
// A node is not traversed until all its children are reached
// Once we get to the bottom we execute the callback and go back up

const depthFirstPostOrder = (startingNode, callback) => {
  // Iterate through each child of the startingNode
  for (let child of startingNode.children) {
    // recursively call depthFirstPostOrder on each child in order to print each of the children's respective children
    depthFirstPostOrder(child, callback);
  }
  // Print the node - startingNode will be A -> first node printed will be K
  callback(startingNode.value);
};

depthFirstPostOrder(a, logger);
