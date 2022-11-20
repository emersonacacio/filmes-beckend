import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import { filmController } from '../controllers/Films.controller'

const filmRoutes = Router()

filmRoutes.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      page: Joi.number().integer().positive(),
      size: Joi.number().integer().positive(),
    },
  }),
  filmController.list,
)

export { filmRoutes }
