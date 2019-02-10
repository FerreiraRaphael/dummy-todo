import { createConnection } from 'typeorm'
import User from './user/entity'

export const connectToDatabase = () =>
  createConnection()

if (!module.parent) {
  connectToDatabase()
}
