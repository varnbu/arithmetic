class Node {
    constructor (key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

/**
 * 二叉搜索树是
 * 只允许左侧节点的值比父节点小，右侧节点的值比父节点大
 */
class BinarySearchTree {
    
    constructor () {
        this.root = null
    }
    
    insert (key) {
        let node = new Node(key)
        if (this.root === null) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    
    insertNode (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
    
    search (key) {
    
    }
    
    // 中序遍历
    inOrderTraverse (cb) {
        this.inOrderTraverseNode(this.root, cb)
    }
    
    inOrderTraverseNode (node, cb) {
        if (node) {
            this.inOrderTraverseNode(node.left, cb)
            cb(node.key)
            this.inOrderTraverseNode(node.right, cb)
        }
    }
    
    // 先序遍历
    preOrderTraverse () {
    
    }
    
    // 后续遍历
    postOrderTraverse () {
    
    }
    
    min () {
    
    }
    
    max () {
    
    }
    
    remove (key) {
    
    }
}


let bst = new BinarySearchTree()
bst.insert(3)
bst.insert(6)
bst.insert(9)
bst.insert(1)
bst.insert(-6)
console.log(bst)

bst.inOrderTraverse((key) => {
    console.log(key)
})
