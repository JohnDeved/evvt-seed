import * as express from 'express'

import * as dotenv from 'dotenv'
dotenv.config()

const router = express.Router()

router.get('/user', (req, res) => {
  res.json(req.user)
})

export = router
