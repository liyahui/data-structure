/**
 * 散列算法作用是可能尽快的在数据结构中找到一个值
 * 方法是简单的将每个键值中的每个字母的ASCII值相加
 * 这是一个简单的HashTable，可能会产生冲突
 */
function HashTable() {
	var table = []

	// 返回键值每个字母的ASCII值相加的结果
	var hashCode = function(key) {
		var hash = 0
		for (var i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i)
		}
		// 为了得到比较小的值，使用hash值和某个数字取余
		return hash % 48
	}

	// 向散列表中增加一个新的项 
	this.put = function(key, value) {
		var index = hashCode(key)
		table[index] = value
	}

	// 根据键值从散列表中获取值
	this.get = function(key) {
		return table[hashCode(key)]
	}

	// 根据键值从散列表中移除值
	this.remove = function(key) {
		table[hashCode(key)] = undefined
	}

	// 辅助方法，显示散列表中存储的值
	this.print = function() {
		// 使用filter过滤掉undefined
		return table.filter(function(item) {
			return item
		})
	}
}

var hashTable = new HashTable()

hashTable.put('name', 'liyahui')
hashTable.put('sex', 'man')
hashTable.put('age', 25)
hashTable.put('qq', 512326881)
hashTable.put('email', 'liyahui.cn@gmail.com')

console.log(hashTable.print())

console.log(hashTable.get('qq'))

hashTable.remove('email')

console.log(hashTable.print())