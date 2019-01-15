function linkList() {
    /* 链表中的每个元素的结构：包含了指向自己的指针，指向一个元素的指针 */
    let Node = function (element) {
        this.element = element
        this.next = null
    }

    let length = 0
    let head = null // 第一个结点的引用
    // 链表的方法

    this.append = function (element) {
        let node = new Node(element)
        let current
        if (head === null) {
            head = node
        } else {
            current = head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        length++
    }
    this.insert = function (position, element) {
        if (position > -1 && position < length) {
            let node = new Node(element)
            let index = 0
            let curr = head
            let prev
            if (position === 0) {
                head = node
                node.next = curr
                head = node
            } else {
                while (index++ < position) {
                    prev = curr
                    curr = curr.next
                }
                prev.next = node
                node.next = curr
            }
            length++
            return true
        } else {
            return false
        }
    }
    this.removeAt = function (position) {
        //  检查是否越界
        if (position > -1 && position < length) {
            let index = 0
            let current = head.next
            let previous
            if (position === 0) {
                head = current.next
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return current.element
        } else {
            return null
        }
    }
    this.remove = function (element) { }
    this.indexOf = function (element) { }
    this.size = function () { }
    this.toString = function () {
        let str = ''
        let curr = head
        while (curr) {
            str += curr.element + ','
            curr = curr.next
        }
        return str
    }
    this.print = function () { }
}

let ls = new linkList()
ls.append(1)
ls.append(2)
ls.append(3)
ls.insert(2, 7)
let str = ls.toString()
console.log(str)