import { createConnection, getConnectionOptions } from 'typeorm'

export function isTestingEnv() {
  return process.env.NODE_ENV === 'test'
}

export const connectToDatabase = async () => {
  const options = await getConnectionOptions()
  const testOptions = {
    database: 'e2e',
    password: 'e2e',
    username: 'e2e',
    port: 5433,
  }
  if (isTestingEnv()) {
    Object.assign(options, testOptions)
  }

  return createConnection(options)
}

if (!module.parent) {
  connectToDatabase()
}
