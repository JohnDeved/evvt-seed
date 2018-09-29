import * as express from 'express'

import * as dotenv from 'dotenv'
dotenv.config()

import { google } from 'googleapis'
import { rarbg } from 'rarbg-api-ts'

const router = express.Router()

// tslint:disable:variable-name
const getDrive = access_token => {
  return google.drive({
    version: 'v3',
    params: { access_token }
  })
}

router.post('/rarbg/list', async (req, res) => {
  const options = req.body
  rarbg.list(options).then(result => {
    res.json(result)
  })
})

router.get('/teamdrives', (req, res) => {
  const drive = getDrive(req.user.accessToken)

  drive.teamdrives.list((err, response) => {
    if (err) return res.send(err)
    res.json(response.data)
  })
})

export = router
