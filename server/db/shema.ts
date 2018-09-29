import { connect, Schema, model } from 'mongoose'

connect('mongodb://localhost:32768/evvt')

const Auth = new Schema({
  name: String,
  token: String
})

const User = new Schema({
  id: String,
  displayName: String,
  accessToken: String,
  refreshToken: String,
  _json: Object
})

export class Models {
  public Auth = model('auth', Auth, 'auths')
  public User = model('user', User, 'users')
}

export const models = new Models()
