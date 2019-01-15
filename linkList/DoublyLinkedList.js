/**
 * doublyLinkList
 */
function DoublyLinkList() {
    let length = 0
    let head = null
    let Node = function (element) {
        return {
            prev: null,
            element: element,
            next: null
        }
    }
    this.length = function () {
        return length
    }
    this.isEmpty = function () {
        return length === 0
    }
    this.append = function (element) {
        let curr = head
        let node = new Node(element)
        if (head === null) {
            head = node
        } else {
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
            node.prev = curr
        }
        length++
    }
    this.toString = function () {
        let str = ''
        let curr = head
        while (curr) {
            str += curr.element + ','
            curr = curr.next
        }
        return str
    }
    this.toRecolveString = function () {
        let last = null
        let curr = head
        while (curr) {
            curr = curr.next
        }
        last = curr

    }
}

let dbls = new DoublyLinkList()
dbls.append(1)
dbls.append(2)
dbls.append(3)
let str = dbls.toString()
console.log(str)