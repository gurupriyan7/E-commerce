import { appConfig } from '../config/appConfig'
import mongoose from 'mongoose'

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(appConfig.dbConnectionUrl)
    console.log(`DataBase connected:${conn.connection.host}`)
  } catch (error) {
    console.log(`an error with database connection ${error}`)
  }
}
 