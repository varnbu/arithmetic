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

    }
    this.removeAt = function (position) { }
    this.remove = function (element) { }
    this.indexOf = function (element) { }
    this.size = function () { }
    this.toString = function () { }
    this.print = function () { }
}

let ls = new linkList()
ls.append({ id: 1 })
console.log(ls)