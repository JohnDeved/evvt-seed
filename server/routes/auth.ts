import * as express from 'express'
import { models } from '../db/shema'
import { google } from 'googleapis'
import { URL } from 'url'

import * as dotenv from 'dotenv'
dotenv.config()

const router = express.Router()

import * as passport from 'passport'
import * as googlePassport from 'passport-google-oauth'

// passport
passport.use(new googlePassport.OAuth2Strategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  const { id } = profile
  let user = await models.User.findOne({ id })

  if (!user) {
    user = new models.User(profile)

    await user.save()
  }

  return done(null, user)
}))

router.get('/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }))

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google' }),
  function (req, res) {
    res.redirect('/')
  })

router.get('/drive/callback', async (req, res) => {
  console.log(req.query)
  const { code, scope, state } = req.query
  const auth = new models.Auth({ token: code, name: state })
  await auth.save()

  res.redirect('/')
})

router.get('/drive/:state', (req, res) => {
  const { state } = req.params

  const cbUrl = new URL('http:localhost:3000/api/auth')
  const auth = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, cbUrl.href)

  const url = auth.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/drive',
    state
  })

  res.redirect(url)
})

export = router
