function Set() {
	var items = {}

	this.add = function(value) {
		if (!this.has(value)) {
			items[value] = value
			return true
		}
		return false
	}

	this.remove = function(value) {
		if (this.has(value)) {
			delete items[value]
			return true
		}
		return false
	}

	this.has = function(value) {
		return items.hasOwnProperty(value)
	}

	this.clear = function() {
		items = {}
	}

	this.size = function() {
		return this.values().length
	}

	this.values = function() {
		return Object.keys(items)
	}
}

var set = new Set()

console.log(set.add(1)) // true
console.log(set.has(1)) // true 
console.log(set.values()) // [1]
console.log(set.size())	// 1

console.log(set.add(2)) // true
console.log(set.has(2)) // true
console.log(set.values()) // [1, 2]
console.log(set.size()) // 2

console.log(set.add(1)) // false
console.log(set.add(2)) // false

console.log(set.remove(1)) // true
console.log(set.values()) // [2]
console.log(set.size()) // 1

set.clear()
console.log(set.size()) // 0
