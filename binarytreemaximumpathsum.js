//Objective is to find the path in a binary tree with the largest sum.
//A node can have a negative value.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(3)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 7)
tree.addLeftNode(tree.root.right, 15)


//O(n) solution that does a dfs traversal on the tree to get the highest sum.

let result = -Infinity
function dfs(node) {
    if (!node) {
        return 0
    }

    //The Math.max statements here are to make sure that left and right are not negative
    let left = Math.max(dfs(node.left), 0)
    let right = Math.max(dfs(node.right), 0)
    let sum = node.val + left + right 

    result = Math.max(result, sum)

    //Recursive call for left and right
    return Math.max(left, right) + node.val
}
dfs(tree.root)

return result