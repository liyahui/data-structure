/**
 * 链表的每个元素是双向的，一个链向前一个元素，一个链向下一个元素
 */
function DoublyLinkedList() {

	// 节点对象，包含添加到列表的值以及列表中下一个节点的指针
	var Node = function(element) {
		this.element = element
		this.next = null
		this.prev = null
	}

	// 存储元素数量
	var length = 0

	// 第一个节点的引用
	var head = null

	// 最后一个节点的引用
	var tail = null

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

			if (head) {
				node.next = current
				current.prev = node
				head = node
			} else {
				head = node
				tail = node
			}

		} else if (position === length) {
			current = tail
			current.next = node
			node.prev = current
			tail = node
		} else {
			while (index++ < position) {
				prev = current
				current = current.next
			}

			node.next = current
			prev.next = node

			node.prev = prev
			current.prev = node
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

			if (length === 1) {
				tail = null
			} else {
				head.prev = null
			}
		} else if (position === length - 1) {
			current = tail
			tail = current.prev
			tail.next = null
		} else {
			while (index++ < position) {
				prev = current
				current = current.next
			}

			prev.next = current.next
			current.next.prev = prev
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

	// 返回tail，可以让外部循环访问
	this.getTail = function() {
		return tail
	}

	// 辅助方法，以数组的形式从头遍历链表内所有元素
	this.printHead = function() {
		var items = []
		var current = head

		while (current) {
			items.push(current.element)
			current = current.next
		}

		return items
	}

	// 辅助方法，以数组的形式从尾遍历链表内所有元素
	this.printTail = function() {
		var items = []
		var current = tail

		while (current) {
			items.push(current.element)
			current = current.prev
		}

		return items
	}
}

var doublyLinkedList = new DoublyLinkedList()

console.log(doublyLinkedList.append('a'), doublyLinkedList.append('b'), doublyLinkedList.append('c')) // true true true
console.log(doublyLinkedList.insert(0, 1), doublyLinkedList.insert(1, 2), doublyLinkedList.insert(2, 3)) // true true true
console.log(doublyLinkedList.printHead(), doublyLinkedList.printTail()) // [1, 2, 3, "a", "b", "c"] ["c", "b", "a", 3, 2, 1]