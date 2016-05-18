/**
 * 顺序搜索是最基本的搜索算法，也是最低效的一种搜索算法
 * 它是将每一个数据和我们要找的数据做比较
 */
function sequential(array, item) {
	var length = array.length

	for (var i = 0; i < length; i++) {
		if (array[i] === item) {
			return i
		}
	}
	return -1
}

console.log(sequential([1, 2, 3, 4, 5], 3)) // 2
console.log(sequential([1, 2, 3, 4, 5], 6)) // -1