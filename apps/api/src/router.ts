import { Router, Request, Response } from 'express'
import { userRouter } from './routers/user.router'


const router = Router()

// api test
router.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        status: 'ok',
        message: 'This is my Api'
    })
})

router.use('/users', userRouter)


export default router