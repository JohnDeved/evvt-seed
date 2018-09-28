import * as express from 'express'
import { google } from 'googleapis'
import * as dotenv from 'dotenv'
dotenv.config()

const router = express.Router()

/* GET home page. */
router.get('/api/auth', function (req, res, next) {
  const { code, scope } = req.query
  console.log(req.query) // store in mongo
  res.redirect('/')
})

router.get('/api/getAuthUrl', (req, res) => {
  const auth = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, 'http://localhost:3000/api/auth')

  const url = auth.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/drive'
  })

  res.json({ url })
})

export = router
