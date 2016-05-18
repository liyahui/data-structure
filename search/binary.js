/**
 * 二分查找类似猜数字游戏，每回答一个数字，会告诉你低了还是高了
 * 二分查找要求被搜索的数据已经排序
 */
function binary(array, item) {
	var low = 0
	var high = array.length - 1
	var mid, value

	while (low <= high) {
		// 选择数组中间值
		mid = Math.floor((low + high) / 2)
		value = array[mid]

		if (value < item) {
			// 如果选中值小于搜索值，则在选中值右边的子数组中，继续找到中间值...
			low = mid + 1
		} else if (value > item) {
			// 如果选中值大于搜索值，则在选中值左边的子数组中，继续找到中间值...
			high = mid - 1
		} else {
			// 如果选中值是要搜索的值，直接返回
			return mid
		}
	}
	return -1
}

console.log(binary([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) // 2