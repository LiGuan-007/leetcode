// "adsd=1&ds=2&ds=3" ==> {asd:1,ds:[2,3]}

function parse(str = '') {
  const arr = decodeURIComponent(str).split('&');
  return arr.reduce((pre, curr, index) => {
    const [key, val] = curr.split('=');
    if (pre.hasOwnProperty(key)) {
      pre[key] = Array.isArray(pre[key]) ? [...pre[key], val] : [pre[key], val]
    } else {
      pre[key] = val
    }
    return pre
  }, {})
}

function stringfy(obj = {}) {
  let result = [];
  Object.keys(obj).forEach((key, index) => {
    const val = obj[key]
    if (Array.isArray(val)) {
      val.forEach((item) => {
        result.push(`${key}=${item}`)
      })
    } else {
      result.push(`${key}=${val}`)
    }
  })
  return encodeURIComponent(result.join('&'))
}