let express = require('express')
let router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource2')
})

module.exports = router
