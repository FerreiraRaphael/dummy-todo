import { createConnection } from 'typeorm'
import User from './user/entity'

export const connectToDatabase = () =>
  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [
      User
    ],
    synchronize: true
  })

if (!module.parent) {
  connectToDatabase()
}
