const obj = {
  name: 'lyh',
  age: 26,
  married: true,
  wife: {
    name: 'lh',
    age: 25
  },
  sisters: [{
    name: 'lyl',
    age: 33
  }, {
    name: 'lyj',
    age: 27
  }]
}

/**
 * 浅拷贝
 */

const copy1 = target => {
  const result = {}
  for (const key in target) {
    result[key] = target[key]
  }
  return result
}

const copy2 = target => {
  return Object.assign({}, target)
}

const obj1 = copy1(obj)
const obj2 = copy2(obj)
console.log('\ncopy1\n', obj1)
console.log('\ncopy2\n', obj2)

/**
 * 深拷贝
 */

const deepCopy1 = (target, result = {}) => {
  for (const key in target) {
    const value = target[key]
    if (typeof value === 'object') {
      result[key] = deepCopy1(value, Array.isArray(value) ? [] : {})
    } else {
      result[key] = value
    }
  }
  return result
}

const deepCopy2 = target => {
  return JSON.parse(JSON.stringify(target))
}

const obj3 = deepCopy1(obj)
const obj4 = deepCopy2(obj)
console.log('\ndeepCopy1\n', obj3)
console.log('\ndeepCopy2\n', obj4)
