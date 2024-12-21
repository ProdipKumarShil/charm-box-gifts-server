import express from 'express'
import { UserControllers } from './user.controller'

const router = express.Router()

router.post('/', UserControllers.createUser)
router.get('/:id', UserControllers.getUserById)
router.put('/:id', UserControllers.updateUser)
router.delete('/:id', UserControllers.deleteUser)

export const UserRoutes = router