/**
 * 栈是一种遵循从后进先出原则的有序集合
 * 新添加的或者待删除的元素都保存在栈的末端，称为栈顶，另一端就叫栈底
 * 在栈中，新元素都靠近栈顶，就元素都接近栈底
 */
function Stack() {
	var items = []

	// 添加新元素到栈顶
	this.push = function(element) {
		items.push(element)
	}

	// 移除栈顶元素，同时返回被移除的元素
	this.pop = function() {
		return items.pop()
	}

	// 返回栈顶的元素，对栈不做任何修改
	this.peek = function() {
		return items[items.length - 1]
	}

	// 如果栈里没有元素返回true，否则返回false
	this.isEmpty = function() {
		return items.length === 0
	}

	// 移除栈里所有元素
	this.clear = function() {
		items = []
	}

	// 返回栈里元素个数	
	this.size = function() {
		return items.length
	}

	// 辅助方法，返回栈内元素
	this.print = function() {
		return items.toString()
	}

}

var stack = new Stack()

console.log(stack.isEmpty()) // true

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.isEmpty()) // false

console.log(stack.print()) // 1, 2, 3

stack.pop()

console.log(stack.print()) // 1, 2

console.log(stack.peek()) // 2

stack.clear()

console.log(stack.print()) //