import { Router } from 'express'
import { filmController } from '../controllers/Films.controller'

const filmRoutes = Router()

filmRoutes.get('/', filmController.list)

export { filmRoutes }
