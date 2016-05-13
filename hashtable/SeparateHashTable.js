/**
 * 分离链接法为散列表的每一个位置创建一个链表
 * 并将元素存储在里面，避免了冲突
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

		if (table[index] === undefined) {
			table[index] = new LinkedList()
		}

		table[index].append({
			key: key,
			value: value
		})
	}

	// 根据键值从散列表中获取值
	this.get = function(key) {
		var index = hashCode(key)

		if (table[index] !== undefined) {
			var current = table[index].getHead()

			while (current) {
				if (current.element.key === key) {
					return current.element.value
				}
				current = current.next
			}
		}
		return undefined
	}

	// 根据键值从散列表中移除值
	this.remove = function(key) {
		var index = hashCode(key)

		if (table[index] !== undefined) {
			var current = table[index].getHead()

			while (current) {
				if (current.element.key === key) {
					table[index].remove(current.element)
					if (table[index].isEmpty()) {
						table[index] = undefined
					}
					return true
				}
				current = current.next
			}
		}
		return false
	}

	this.print = function() {
		var all = []
		table.forEach(function(linkedList) {
			var current = linkedList.getHead()
			var group = []
			while (current) {
				group.push(current.element)
				current = current.next
			}
			all.push(group)
		})
		return all
	}
}

/**
 * 链表的每个元素由一个存储元素本身的节点和一个指向下一个元素的引用组成
 */
function LinkedList() {

	// 节点对象，包含添加到列表的值以及列表中下一个节点的指针
	var Node = function(element) {
		this.element = element
		this.next = null
	}

	// 存储元素数量
	var length = 0

	// 第一个节点的引用
	var head = null

	// 链表末尾添加元素
	this.append = function(element) {
		return this.insert(length, element)
	}

	// 向列表的指定位置插入元素
	this.insert = function(position, element) {

		// 检查位置是否合法
		if (position < 0 || position > length) {
			return false
		}

		var node = new Node(element)
		var current = head
		var prev = null
		var index = 0

		if (position === 0) {
			node.next = head
			head = node
		} else {
			while (index++ < position) {
				prev = current
				current = current.next
			}

			node.next = current
			prev.next = node
		}

		length++

		return true
	}

	// 从链表的指定位置移出元素
	this.removeAt = function(position) {
		// 检查位置是否合法
		if (position < 0 || position >= length) {
			return null
		}

		var current = head
		var prev = null
		var index = 0

		if (position === 0) {
			head = current.next
		} else {
			while (index++ < position) {
				prev = current
				current = current.next
			}

			prev.next = current.next
		}

		length--

		return current.element
	}

	// 从列表移除指定元素
	this.remove = function(element) {
		var index = this.indexOf(element)
		return this.removeAt(index)
	}

	// 返回元素在链表中的索引，没有则返回-1
	this.indexOf = function(element) {
		var current = head
		var index = 0

		while (current) {
			if (current.element === element) {
				return index
			}
			index++
			current = current.next
		}
		return -1
	}

	// 如果链表为空，返回true，否则返回false
	this.isEmpty = function() {
		return length === 0
	}

	// 返回链表内元素个数
	this.size = function() {
		return length
	}

	// 返回head，可以让外部循环访问
	this.getHead = function() {
		return head
	}

	// 辅助方法，以数组的形式显示链表内所有元素
	this.print = function() {
		var items = []
		var current = head

		while (current) {
			items.push(current.element)
			current = current.next
		}

		return items
	}
}

var hashTable = new HashTable()

hashTable.put('jonathan', 'jonathan@gmail.com')
hashTable.put('jamie', 'jamie@gmail.com')
hashTable.put('sue', 'sue@gmail.com')
hashTable.put('liyahui', 'liyahui.cn@gmail.com')

console.log(hashTable.print()) // ...
console.log(hashTable.get('liyahui')) // liyahui.cn@gmail.com
console.log(hashTable.remove('jonathan'), hashTable.remove('jamie')) // true true
console.log(hashTable.print()) // ...