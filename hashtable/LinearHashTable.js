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
		return hash % 37
	}

	// 向散列表中增加一个新的项 
	this.put = function(key, value) {
		var index = hashCode(key)
		if (table[index] == undefined) {
			table[index] = {
				key: key,
				value: value
			}
		} else {
			var position = ++index
			while (table[position] != undefined) {
				position++
			}
			table[position] = {
				key: key,
				value: value
			}
		}
	}

	// 根据键值从散列表中获取值
	this.get = function(key) {
		var index = hashCode(key)

		if (table[index] === undefined) {
			return undefined
		}

		if (table[index].key === key) {
			return table[index]
		} else {
			var position = ++index

			while (table[position]) {
				if (table[position].key == key) {
					return table[position].value
				}
				position++
			}
		}

		return undefined
	}

	// 根据键值从散列表中移除值
	this.remove = function(key) {
		var index = hashCode(key)

		if (table[index] === undefined) {
			return false
		}

		if (table[index].key === key) {
			table[index] = undefined
			return true
		} else {
			var position = ++index

			while (table[position]) {
				if (table[position].key == key) {
					table[position] = undefined
					return true
				}
				position++
			}
		}

		return false
	}

	// 辅助方法，显示散列表中存储的值
	this.print = function() {
		var result = []
		table.forEach(function(item) {
			if (item) {
				result.push(item.value)
			}
		})
		return result
	}
}

var hashTable = new HashTable()

hashTable.put('jonathan', 'jonathan@gmail.com')
hashTable.put('jamie', 'jamie@gmail.com')
hashTable.put('sue', 'sue@gmail.com')
hashTable.put('liyahui', 'liyahui.cn@gmail.com')

console.log(hashTable.get('sue')) // sue@gmail.com
console.log(hashTable.remove('liyahui'), hashTable.remove('jamie')) // true true
console.log(hashTable.print()) // ['jonathan@gmail.com', 'sue@gmail.com']