const test = require('./modules/test-mock')
const user = require('./modules/user-mock')
const role = require('./modules/role/role-mock')

const mocks = [
  ...test,
  ...user,
  ...role
]

module.exports = {
  mocks
}
