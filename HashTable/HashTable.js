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
    log(){
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
}

let hashTable = new HashTable()
hashTable.put('abc', '111')
hashTable.put('def', '222')
hashTable.log()
