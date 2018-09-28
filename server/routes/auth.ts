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

passport.serializeUser(function (user: any, done) {
  done(null, user.id)
})

passport.deserializeUser(async function (id: any, done) {
  const user = await models.User.findOne({ id })

  if (user) {
    done(null, user)
  } else {
    done('user not found')
  }
})

router.get('/google',
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/drive']
  }))

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google' }),
  function (req, res) {
    res.redirect('/')
  })

export = router
