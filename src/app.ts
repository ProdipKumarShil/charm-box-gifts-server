import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { ProductRoutes } from './app/modules/products/product.route'
import { UserRoutes } from './app/modules/users/user.route'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: 'Server is working correctly!💥',
    message: 'Have a good day!😊'
  })
})
app.use('/api/products', ProductRoutes)
app.use('/api/users', UserRoutes)

export default app