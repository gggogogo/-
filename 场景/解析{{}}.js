let obj = {
  group: {
    name: '新制造',
    jobs: ['前端']
  },
  company: '阿里'
}

let template = '你好，我们公司是{{ company }}，我们属于{{group.name}}业务线，我们在招聘各种方向的人才，包括{{group.jobs[0]}}、{{group["jobs"][1]}}等。';

function parse(str) {
  let reg = /\{\{\s*\w+(.\w+)*(\[\"*\w+\"*\])*\s*\}\}/g,
    res = '',
    values = [],
    strs = str.match(reg)                    // 利用正则取出所有{{}}
  console.log(strs)
  values = strs.map(item => {
    keyStr = item.slice(2, item.length - 2).trim()  // 模板中的字符串
    let objKeys = keyStr.match(/\w+/g)     // 字符串对应的对象路径
    return parseObj(obj, objKeys)           // 根据对象路径获得对象值
  }
  )
  console.log(values)

  function parseObj(obj, keys) {
    let key, cur = obj
    while (keys.length) {
      key = keys.shift()
      cur = cur[key]
    }
    return cur
  }
  res = str.replace(reg, function () {
    return values.shift()
  })
  return res
}
parse(template)