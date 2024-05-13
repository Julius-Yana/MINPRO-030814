import { Router } from 'express'
import { getAllUsers, getUserDiscount, getUserPoint, loginUser, referralPoint, regUser, updateUser, verifyAccount } from '../controllers/user.controller'
import { validateRegister } from '@/middlewares/validator'
import { verifyToken } from '@/middlewares/verifyToken'

const userRouter = Router()

userRouter.post('/', validateRegister, regUser)
userRouter.post('/login', loginUser)
userRouter.get('/',getAllUsers)
userRouter.put('/', verifyToken, updateUser)
userRouter.put('/verify', verifyToken, verifyAccount)
userRouter.post('/point', verifyToken, referralPoint)
userRouter.get('/point', verifyToken, getUserPoint)
userRouter.get('/discount', verifyToken, getUserDiscount)

export { userRouter }