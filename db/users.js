const { uid } = require('uid')

const users = [
  {
    id: uid(),
    name: 'John Doe',
    email: 'johndoe@gmail.com'
  },
  {
    id: uid(),
    name: 'Jane Doe',
    email: 'janedoe@gmail.com'
  }
]

module.exports = users
