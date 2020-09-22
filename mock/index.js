const test = require('./modules/test-mock')
const user = require('./modules/user-mock')

const mocks = [
  ...test,
  ...user
]

module.exports = {
  mocks
}
