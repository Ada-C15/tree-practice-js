class TreeNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Time Complexity: O(log n) 
    // Space Complexity: O(1) 
    add(key, value) {
        const newNode = new TreeNode(key, value);

        const addHelper = (currentNode, newNode) => {
            if (newNode.key > currentNode.key && !currentNode.right ) {
                // if new is greater than current node and the current's right (larger) branch is empty
                currentNode.right = newNode;
                return;
            } else if (newNode.key <= currentNode.key && !currentNode.left ) {
                // if new is less/equal current node and the current's left (smaller) branch is empty
                currentNode.left = newNode;
                return;
            } else if (newNode.key > currentNode.key) {
                // if the value to be added is greater, 
                return addHelper(currentNode.right, newNode);
            } else {
                return addHelper(currentNode.left, newNode);
            }
        }

        if (this.root === null) {
            this.root = newNode;
            return; 
        } else {
            const currentNode = this.root;
            return addHelper(currentNode, newNode);
            }

    }

    // Time Complexity: O(log n) 
    // Space Complexity: O(1) 
    find(key) {
        
        const findHelper = (current, key) => {
            if ( current.key == key ){
                return current.value
            } else if ( current.key > key ){
                return findHelper(current.left, key)
            } else {
                return findHelper(current.right, key)
            }   
        }

        if ( !this.root ){
            return null;
        } else {
            return findHelper(this.root, key)
        }
    }

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    inorder() {
        let resultsArray = []
        const orderNodes = (node) =>{
            if (node){
                // if there is a left node, the search will access it
                orderNodes(node.left);
                // if there's nothing more on the left, the node will be added to the list
                resultsArray.push({ key: node.key, value: node.value })
                // and the right node will be accessed and looked at
                orderNodes(node.right);
            }
            
        }
        orderNodes(this.root)
        return resultsArray;
    }

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    preorder() {
        let resultsArray = [];
        const orderNodes = (node) => {
          if (node) {
            // the node will be added to the list when accessed
            resultsArray.push({ key: node.key, value: node.value });
            // if there is a left node, the search will access it
            orderNodes(node.left);
            // and the right node will be accessed and looked at
            orderNodes(node.right);
          }
        };
        orderNodes(this.root)
        return resultsArray;
    }

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    postorder() {
        let resultsArray = []
        const orderNodes = (node) =>{
            if (node) {
              // if there is a left node, the search will access it
              orderNodes(node.left);
              // and the right node will be accessed and looked at
              orderNodes(node.right);
              // if there's nothing more on the left or right, the node will be added to the list
              resultsArray.push({ key: node.key, value: node.value });
            }
            
        }
        orderNodes(this.root)
        return resultsArray;
    }

    // Time Complexity: O(n)
    // Space Complexity: O(1)
    height() {
        const measureNodes = (node, height = 0) =>{
            if (node){
                const leftHeight = measureNodes(node.left, height+1);
                const rightHeight = measureNodes(node.right, height+1);

                const currentHeight = leftHeight > rightHeight ? leftHeight : rightHeight;
                // returns the height of the taller of the two nodes
                return currentHeight;
            }
            // when bottom of tree is reached, height is given
            return height;
        }

        return measureNodes(this.root);
    }

    // Optional Method
    // Time Complexity: ?
    // Space Complexity: ?
    bfs() {
        throw new Error("This method hasn't been implemented yet!");
    }

    // Useful for printing
    toString() {
        return `${this.inorder()}`
    }
}

module.exports = Tree;