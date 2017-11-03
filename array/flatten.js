/**
 * 数组扁平化
 */

const array = ['a', ['b', 'c', ['d', 'e', 'f']]]

const flatten1 = array => {
  return array.reduce((prev, current) => prev.concat(Array.isArray(current) ? flatten1(current) : current), [])
}

const flatten2 = array => {
  let result = []
  array.forEach(item => {
    result = result.concat(Array.isArray(item) ? flatten2(item) : item)
  })
  return result
}

const flatten3 = array => {
  return array.toString().split(',')
}

console.log(flatten1(array))
console.log(flatten2(array))
console.log(flatten3(array))