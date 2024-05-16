import { Router } from 'express'
import { getAllUsers, getUserDiscount, getUserPoint, imageUser, loginUser, referralPoint, regUser, updateUser, verifyAccount } from '../controllers/user.controller'
import { validateRegister } from '@/middlewares/validator'
import { verifyToken } from '@/middlewares/verifyToken'
import { uploader } from '@/helpers/uploader'
import userActive from '@/middlewares/useractive'

const userRouter = Router()

userRouter.post('/', validateRegister, regUser)
userRouter.post('/login', loginUser)
userRouter.get('/',getAllUsers)
userRouter.put('/', verifyToken, updateUser)
userRouter.patch('/image', verifyToken, uploader("IMG", "/images").single("file"), imageUser)
userRouter.put('/verify', verifyToken, verifyAccount)
userRouter.post('/point', verifyToken, referralPoint)
userRouter.get('/point', verifyToken, getUserPoint)
userRouter.get('/discount', verifyToken, getUserDiscount)

export { userRouter }