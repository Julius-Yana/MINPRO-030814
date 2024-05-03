import { Router } from 'express'
import { getAllUsers, loginUser, regUser } from '../controllers/user.controller'

const userRouter = Router()

userRouter.post('/', regUser)
userRouter.post('/login', loginUser)
userRouter.get('/',getAllUsers)

export { userRouter }