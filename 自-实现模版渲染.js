const template = '嗨，{{ info.name.value }}您好，今天是星期 {{ day.value }}, 天气{{ weather.info.state }}';
const data = {
  info: {
    name: {
      value: '张三'
    }
  },
  day: {
    value: '三'
  },
  weather: {
    info: {
      state: '晴'
    }
  }
};
console.log(render(template, data)) // 嗨，张三您好，今天是星期三, 天气晴


function render(template, data) {
  return template.replace(/\{\{([^}]+)\}\}/g, function (match, key) {
    console.log(match, key)
    return eval(`data.${key}`)
  })
}


