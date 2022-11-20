import { Router } from 'express'
import { filmRoutes } from 'modules/Films/routes/films.router'

const routes = Router()

routes.use('/film', filmRoutes)

export { routes }
