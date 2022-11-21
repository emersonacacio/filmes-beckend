import { Router } from 'express'
import swaggerUI from 'swagger-ui-express'
import { filmRoutes } from 'modules/Films/routes/films.router'
import swaggerDocument from '../../../config/swagger.json'
const routes = Router()

routes.use('/film', filmRoutes)
routes.use('/docs', swaggerUI.serve)
routes.get('/docs', swaggerUI.setup(swaggerDocument))

export { routes }
