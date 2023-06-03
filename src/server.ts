import express from 'express'
import { errorHandler } from './middlewares/errorHandler'
import userRoutes from './routes/userRouter'
import productRoutes from './routes/productRouter'
import cartRouters from './routes/cartRouter'
import { appConfig } from './config/appConfig'
import cors from 'cors'
import { connectDb } from './utils/dbConnection'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

connectDb()

app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes)
app.use('/api/cart', cartRouters)

app.use(errorHandler)

app.listen(appConfig.port, () =>
  console.log(`server started on port ${appConfig.port}`),
)
