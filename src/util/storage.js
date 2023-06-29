/**
 * 封装本地存储操作模块
*/

/**
 * 存储数据
 */

export function setItem (key, value) {
  console.log('value值为:' + value)
  // 将数组或者对象类型的数据转换为JSON字符串进行存储
  if (typeof value === 'object') {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    window.localStorage.setItem(key, key)
  }
}

/**
 * 获取数据
 */

export function getItem (key) {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

/**
 * 删除数据
 */
export function deleteItem (key) {
  window.localStorage.removeItem(key)
}
