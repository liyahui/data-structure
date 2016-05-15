/**
 * 选择排序是找到数据中最小值并将其放置在第一位，接着找到第二最小值将其放置第二位，以此类推
 * @param  {Array} array 需要排序的数组
 * @return {Array}       排序后的数组
 */
function selection(array) {
	var length = array.length

	for (var i = 0; i < length; i++) {
		var minIndex = i

		for (var j = i; j < length; j++) {
			if (array[minIndex] > array[j]) {
				minIndex = j
			}
		}

		if (i !== minIndex) {
			var temp = array[i]
			array[i] = array[minIndex]
			array[minIndex] = temp
		}
	}

	return array
}

var array = [8, 3, 2, 7, 1, 4, 9, 6, 5]
console.log(selection(array)) // 1, 2, 3, 4, 5, 6, 7, 8, 9