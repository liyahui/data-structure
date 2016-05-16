/**
 * 冒泡排序比较任何两个相邻的值，如果第一个比第二个大，则交换它们的位置
 * 
 * @param  {Array} array 需要排序的数组
 * @return {Array}       排序后的数组
 */
function bubble(array) {
	var length = array.length

	for (var i = 0; i < length - 1; i++) {
		for (var j = 0; j < length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				var temp = array[j]
				array[j] = array[j + 1]
				array[j + 1] = temp
			}
		}
	}

	return array
}

var array = [5, 4, 3, 2, 1]
console.log(bubble(array)) // 1, 2, 3, 4, 5

// 5 4 3 2 1

// 4 5 3 2 1
// 4 3 5 2 1
// 4 3 2 5 1
// 4 3 2 1 5

// 3 4 2 1 5
// 3 2 4 1 5
// 3 2 1 4 5

// 2 3 1 4 5
// 2 1 3 4 5

// 1 2 3 4 5