import { Router } from 'express'

const router = Router()

router.use('auth')
router.use('file')


export default router;