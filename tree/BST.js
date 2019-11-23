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
        return this.searchNode(this.root, key)
    }
    
    searchNode (node, key) {
        if (node) {
            if (key < node.key) {
                return this.searchNode(node.left, key)
            } else if (key > node.key) {
                return this.searchNode(node.right, key)
            } else {
                return node.key
            }
        } else {
            return null
        }
        
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
        this.postOrderTraverseNode(this.root, cb)
    }
    
    postOrderTraverseNode (node, cb) {
        if (node) {
            this.postOrderTraverseNode(node.left, cb)
            this.postOrderTraverseNode(node.right, cb)
            cb(node.key)
        }
    }
    
    // 搜索最大值与最小值只要找最左边或最右边的结点即可
    min () {
    
    }
    
    max () {
    
    }
    
    _findMixNode (node) {
        if (node) {
            while (node && node.left) {
                node = node.left
            }
            return node
        } else {
            return null
        }
    }
    
    remove (key) {
        this.root = this.removeNode(this.root, key)
    }
    
    removeNode (node, key) {
        if (node) {
            if (key < node.key) {
                node = this.removeNode(node.left, key)
                return node
            } else if (key > node.key) {
                node = this.removeNode(node.right, key)
                return node
            } else {
                if (node.left === null && node.right === null) {
                    node = null
                    return node
                } else {
                    if (node.left === null) {
                        node = node.left
                        return node
                    }else if (node.right === null){
                        node = node.right
                        return node
                    }else{
                    
                    }
                    
                }
            }
        } else {
            return null
        }
    }
}


let bst = new BinarySearchTree()
bst.insert(3)
bst.insert(6)
bst.insert(9)
bst.insert(1)
bst.insert(-6)
console.log(bst)

function log (key) {
    console.log(key)
    
}

bst.inOrderTraverse(log)
console.log('=============')
bst.preOrderTraverse(log)
console.log('=============')
bst.postOrderTraverse(log)
console.log('=============')

let ru = bst.search(-6)
let ru2 = bst.search(-66)
console.log(ru)
console.log(ru2)
console.log('=============')
let minNode = bst._findMixNode(bst.root)
console.log(minNode)
