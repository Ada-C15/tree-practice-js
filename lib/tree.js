
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

    // Time Complexity: o(log n)
    // Space Complexity: o(log n)

    add(key, value) {
        const node = new TreeNode(key, value);
        if (!this.root) { 
            this.root = node;      
        } else {
            this.addNode(this.root, node);
        };
    };
    
    addNode(current, node) {
        if (!current) {
            return node;
        } else {
            if (current.key > node.key) {
                current.left = this.addNode(current.left, node);  
            } else {
                current.right = this.addNode(current.right, node);
            }
        }
        return current;
    }; 

    // Time Complexity: o(log n)
    // Space Complexity: o(log n)
    find(key) {
        if (!this.root) return null;
        let current = this.root;
        while (current) {
            if (current.key === key)  {
                return current.value;
            } else if (current.key < key) {
                current = current.right;
            } else {
                current = current.left;
            };
        };     
    };

    // Time Complexity: o(n)
    // Space Complexity: o(n)
    inorder() {
        let inOrderArray = [];
        let current = this.root;
        return this.orderNodes(current, inOrderArray);
    };

    orderNodes(currentNode, array) {
        if (currentNode) {
            this.orderNodes(currentNode.left, array);
            array.push({key: currentNode.key, value: currentNode.value});
            this.orderNodes(currentNode.right, array);
        };  
        return array;
    };

    // Time Complexity: o(n)
    // Space Complexity: o(n)
    preorder() {
        let inOrderArray = [];
        let current = this.root;
        return this.preOrderNodes(current, inOrderArray);
    };

    preOrderNodes(currentNode, array) {
        if (currentNode) {
            array.push({key: currentNode.key, value: currentNode.value});
            this.preOrderNodes(currentNode.left, array);
            this.preOrderNodes(currentNode.right, array);
        };  
        return array;
    };

    // Time Complexity: o(n)
    // Space Complexity: o(n)
    postorder() {
        let inOrderArray = [];
        let current = this.root;
        return this.postOrderNodes(current, inOrderArray);
    };

    postOrderNodes(currentNode, array) {
        if (currentNode) {
            this.postOrderNodes(currentNode.left, array);
            this.postOrderNodes(currentNode.right, array);
            array.push({key: currentNode.key, value: currentNode.value});
        };  
        return array;
    };

    // Time Complexity: o(h)
    // Space Complexity: o(n)
    height() {
        let current = this.root;
        let currentHeight = 0;
        return this.treeHeight(current, currentHeight);        
    }

    treeHeight(currentNode, count=0){
        if (!currentNode) return count;

        let right = this.treeHeight(currentNode.right, count+1);
        let left = this.treeHeight(currentNode.left, count+1);

        if (left < right){
            return right;
        };
        return left;
    };
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