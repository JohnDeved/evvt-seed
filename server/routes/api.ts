import * as express from 'express'

import * as dotenv from 'dotenv'
dotenv.config()

import { google } from 'googleapis'

const router = express.Router()

// tslint:disable:variable-name
const getDrive = access_token => {
  return google.drive({
    version: 'v3',
    params: { access_token }
  })
}

router.get('/user', (req, res) => {
  res.json(req.user)
})

router.get('/teamdrives', (req, res) => {
  const drive = getDrive(req.user.accessToken)

  drive.teamdrives.list((err, response) => {
    if (err) return res.send(err)
    res.json(response.data)
  })
})

export = router
