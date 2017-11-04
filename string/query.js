const query = encodeURI('name=李亚辉&sex=男&age=26&married=true&weight=62.5&like=code&like=sleep')

/**
 * 获取 url 参数，同名参数只能获取到第一个
 */
const getQueryString1 = (query, name) => {
  if (name === undefined) return null
  const regexp = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  const result = query.match(regexp)
  return result ? decodeURI(result[2]) : null
}

console.log('getQueryString1', getQueryString1(query, 'name'), getQueryString1(query, 'like'), '\n')

/**
 * 获取 url 参数，同名参数全部获取返回数组
 */
const getQueryString2 = (query, name) => {
  if (name === undefined) return null
  const regexp = new RegExp(`(^|&)${name}=([^&]*)`, 'ig')
  const result = []
  query.replace(regexp, (match, p1, p2) => {
    result.push(decodeURI(p2))
  })
  return result.length === 1 ? result.shift() : result
}

console.log('getQueryString2', getQueryString2(query, 'name'), getQueryString2(query, 'like'), '\n')

/**
 * 解析 query 参数（正则）
 */
const parseQuery1 = query => {
  const result = {}
  if (!query || typeof query !== 'string') return result
  query.replace(/([^&]*)=([^&]*)/g, (match, key, value) => {
    value = decodeURI(value)
    if (result.hasOwnProperty(key)) {
      const newValue = Array.isArray(result[key]) ? result[key] : [result[key]]
      newValue.push(value)
      result[key] = newValue
    } else {
      result[key] = value
    }
  })
  return result
}

console.log('parseQuery1', parseQuery1(query), '\n')

/**
 * 解析 query 参数
 */
const parseQuery2 = query => {
  const result = {}
  if (!query || typeof query !== 'string') return result
  const list = query.split('&')
  for (const item of list) {
    if (!item) continue
    const pair = item.split('=')
    const key = pair[0]
    const value = decodeURI(pair[1])
    if (result.hasOwnProperty(key)) {
      const newValue = Array.isArray(result[key]) ? result[key] : [result[key]]
      newValue.push(value)
      result[key] = newValue
    } else {
      result[key] = value
    }
  }
  return result
}

console.log('parseQuery2', parseQuery2(query), '\n')
