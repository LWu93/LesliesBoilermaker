const db = require('./database')
const Kitten = require('./models/Kittens')
const User = require('./models/User')

Kitten.hasOne(User)
User.belongsToMany(Kitten)

module.exports = {
  db,
  Kitten,
  User
}
