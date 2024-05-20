import { Router, Request, Response } from 'express'
import { userRouter } from './routers/user.router'
import eventRouter from './routers/event.router'
import { superadminRouter } from './routers/superadmin.router'


const router = Router()

// api test
router.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        status: 'ok',
        message: 'This is my Api'
    })
})


router.use('/users', userRouter)
router.use('/event', eventRouter)
router.use('/superadmin', superadminRouter)


export default router