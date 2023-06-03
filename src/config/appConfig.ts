import dotenv from 'dotenv'

dotenv.config()

export const appConfig = {
  dbConnectionUrl: process.env.MONGO_URL || '',
  port:process.env.PORT || 5000,
  jwtSecret: process.env.JWT_ACCESS_TOKEN_SECRET || '',
}
