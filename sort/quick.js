/**
 * 快速排序分为三步
 * 在数据集之中，选择一个元素作为基准
 * 小于基准的元素放到左边，其他的元素放到右边
 * 对基准左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止
 *
 * @param  {Array} array 需要排序的数组
 * @return {Array}       排序后的数组
 */
function quick(array) {
	if (array.length <= 1) return array

	var index = Math.floor(array.length / 2)
	var value = array.splice(index, 1)[0]
	var left = []
	var right = []

	for (var i = 0; i < array.length; i++) {
		if (array[i] < value) {
			left.push(array[i])
		} else {
			right.push(array[i])
		}
	}
	return quick(left).concat(value, quick(right))
}

var array = [5, 4, 3, 2, 1]
console.log(quick(array)) // [1, 2, 3, 4, 5]

// 5 4 3 2 1

// 2 1 3 5 4
// 1 2 3 4 5