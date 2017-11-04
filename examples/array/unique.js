/**
 * 数组去重
 */

const array = [1, 8, 7, 0, 6, 8, 3, 4, 3, 7, 0]

const unique1 = array => Array.from(new Set(array))

const unique2 = array => {
  const result = [array[0]]
  for (let i = 1; i < array.length; i++) {
    !result.includes(array[i]) && result.push(array[i])
  }
  return result
}

console.log(unique1(array))
console.log(unique2(array))
