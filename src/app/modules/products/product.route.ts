import express from 'express'
import { ProductControllers } from './product.controller'

const router = express.Router()

router.post('/', ProductControllers.createProduct)
router.get('/:id', ProductControllers.getProductById)
router.put('/:id', ProductControllers.updateProduct)
router.delete('/:id', ProductControllers.deleteProduct)

export const ProductRoutes = router