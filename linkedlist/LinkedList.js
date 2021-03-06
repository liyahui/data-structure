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

var linkedList = new LinkedList()

console.log(linkedList.isEmpty(), linkedList.size()) // true 0 

console.log(linkedList.append('a')) // true
console.log(linkedList.append('b')) // true
console.log(linkedList.append('c')) // true

console.log(linkedList.insert(1, 'd'), linkedList.print()) // true ["a", "d", "b", "c"]
console.log(linkedList.isEmpty(), linkedList.size()) // false 4 

console.log(linkedList.removeAt(2), linkedList.print()) // b ["a", "d", "c"]
console.log(linkedList.remove('c'), linkedList.print()) // c ["a", "d"]

console.log(linkedList.indexOf('d')) // 1
