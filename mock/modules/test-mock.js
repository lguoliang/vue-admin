const Mock = require('mockjs')

module.exports = [
  // test
  {
    url: '/api/test',
    response: config => {
      const Random = Mock.Random
      var list = []
      for (let i = 0; i < 30; i++) {
        var listObject = {
          title: Random.csentence(5, 10), // 随机生成一段中文文本。
          company: Random.csentence(5, 10),
          attention_degree: Random.integer(100, 9999), // 返回一个随机的整数。
          photo: Random.image('114x83', '#00405d', '#FFF', 'Mock.js')
        }
        list.push(listObject)
      }
      return {
        data: list
      }
    }
  }
]
