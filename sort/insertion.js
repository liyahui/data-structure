/**
 * 插入排序假定第一项已经排序了，接着它和第二项比较
 * 是应该在原位还是插入到第一项之前呢，接着和第三项进行比较，以此类推
 *
 * @param  {Array} array 需要排序的数组
 * @return {Array}       排序后的数组
 */
function insertion(array) {
	var length = array.length,
		j, temp

	for (var i = 1; i < length; i++) {
		j = i
		temp = array[i]

		while (j > 0 && array[j - 1] > temp) {
			array[j] = array[j - 1]
			j--
		}

		array[j] = temp
	}

	return array
}

var array = [5, 4, 3, 2, 1]
console.log(insertion(array)) // [1, 2, 3, 4, 5]

// 5 4 3 2 1
// 4 5 3 2 1
// 3 4 5 2 1
// 2 3 4 5 1
// 1 2 3 4 5