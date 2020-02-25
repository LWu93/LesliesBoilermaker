const db = require('./server/database/database');
const app = require('./server/index')
const port = process.env.PORT || 3000;

db.sync().then(function () {
  app.listen(port)
})
