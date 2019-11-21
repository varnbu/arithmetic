/**
 * 散列表 hash
 */
class HashTable {
    constructor (table) {
        if (Array.isArray(table)) {
            this.table = table
        } else {
            this.table = []
        }
    }
    
    put (key, value) {
        let position = this.loseLoseHashCode(key)
        console.log('kye-', position)
        this.table[position] = value
    }
    
    get (key) {
        let position = this.loseLoseHashCode(key)
        return this.table[position]
    }
    
    remove (key) {
        let position = this.loseLoseHashCode(key)
        this.table[position] = undefined
    }
    
    log () {
        console.log(this.table)
    }
    
    /**
     * 散列函数
     * 根据键名的 ASCII 来进行计算
     */
    loseLoseHashCode (key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = hash + key.charCodeAt(i)
        }
        return hash % 37
    }
    
    /**
     * 更好的散列函数 降低冲突的可能性
     * 更多的散列函数可以去查找相关资料
     * @param key
     */
    dbj2HashCOde (key) {
        let hash = 5381
        for (let i = 0; i < key.lenght; i++) {
            hash = hash * 33 + key.charCodeAt(i)
        }
        return hash % 1013
    }
}

let hashTable = new HashTable()
hashTable.put('abc', '111')
hashTable.put('def', '222')
hashTable.log()
console.log(hashTable.get('abc'))
hashTable.remove('abc')
hashTable.log()

/* 处理散列冲突的方法
 * 1 分离链接  为每个散列表的每一个位置创建一个链表，并将元素存放在链表里面
 * 2 线性探查 当希望向一个位置添加新元素的时候，如果索引 index 已经被占据，就尝试 index + 1 的位置，如果index+1也被占据 就尝试index+2 以此类推
 * 3 双散列
 *
 */

