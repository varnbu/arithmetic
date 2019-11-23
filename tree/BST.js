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
    
    /*
     * 中序遍历  一般用于排序
     */
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
    
    /*
     * 先序遍历 一般用于打印结构化的文档
     */
    preOrderTraverse (cb) {
        this.preOrderTraverseNode(this.root, cb)
    }
    
    preOrderTraverseNode (node, cb) {
        if (node) {
            cb(node.key)
            this.preOrderTraverseNode(node.left, cb)
            this.preOrderTraverseNode(node.right, cb)
        }
    }
    
    /*
     * 后续遍历 应用： 计算一个目录及其子目录中所有文件所占空间的大小
     */
    postOrderTraverse (cb) {
        this.postOrderTraverseNode(this.root,cb)
    }
    postOrderTraverseNode(node,cb){
        if(node){
            this.postOrderTraverseNode(node.left,cb)
            this.postOrderTraverseNode(node.right,cb)
            cb(node.key)
        }
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

function log(key){
    console.log(key)
    
}
bst.inOrderTraverse(log)
console.log('=============')
bst.preOrderTraverse(log)
console.log('=============')
bst.postOrderTraverse(log)
