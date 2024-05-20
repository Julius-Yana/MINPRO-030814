import { Router } from 'express'
import { checkReferral, getAllUsers, getUserByToken, getUserDiscount, getUserImage, getUserPoint, imageUser, loginUser, referralPoint, regUser, updateUser, verifyAccount } from '../controllers/user.controller'
import { validateRegister } from '@/middlewares/validator'
import { verifyToken } from '@/middlewares/verifyToken'
import { uploader } from '@/helpers/uploader'
import userActive from '@/middlewares/useractive'

const userRouter = Router()

userRouter.post('/', validateRegister, regUser)
userRouter.post('/login', loginUser)
userRouter.put('/verify', verifyToken, verifyAccount)
userRouter.get('/',getAllUsers)
userRouter.put('/', verifyToken, updateUser)
userRouter.patch('/image', verifyToken, uploader("IMG", "/images").single("file"), imageUser)
userRouter.get('/image', verifyToken, getUserImage)
userRouter.get('/profile', verifyToken, getUserByToken)


userRouter.post('/checkreferral',checkReferral)
userRouter.post('/referral', verifyToken, referralPoint)
userRouter.get('/point', verifyToken, getUserPoint)
userRouter.get('/discount', verifyToken, getUserDiscount)

export { userRouter }