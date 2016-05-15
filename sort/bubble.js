/**
 * 冒泡排序比较任何两个相邻的值，如果第一个比第二个大，则交换它们的位置
 * @param  {Array} array 需要排序的数组
 * @return {Array}       排序后的数组
 */
function bubble(array) {
	var length = array.length

	for (var i = 0; i < length; i++) {
		for (var j = 0; j < length - i; j++) {
			if (array[j] > array[j + 1]) {
				var temp = array[j]
				array[j] = array[j + 1]
				array[j + 1] = temp
			}
		}
	}

	return array
}

var array = [8, 3, 2, 7, 1, 4, 9, 6, 5]
console.log(bubble(array)) // 1, 2, 3, 4, 5, 6, 7, 8, 9