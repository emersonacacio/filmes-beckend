import 'express-async-errors'
import 'config/winston'
import 'dotenv/config'
import { errors } from 'celebrate'
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { AppError } from 'shared/errors/AppError'
import { routes } from './routes'

const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)

app.use(errors())
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    logger.error(`code ${error.statusCode} - ${error.message}`)
    res
      .status(error.statusCode)
      .json({ status: 'error', message: error.message })
    return next()
  }

  logger.error(`code 500 - Internal server error`)
  res.status(500).json({ status: 'error', message: 'Internal server error' })
  next()
})

app.listen(3333, () => {
  logger.info('Server started on port 3333!')
})
