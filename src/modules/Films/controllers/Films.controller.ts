import { Request, Response } from 'express'
import { AppError } from 'shared/errors/AppError'

import { listFilmService } from '../services/list.films.service'

class FilmController {
  async list(request: Request, response: Response) {
    const { page, size } = request.query

    if (page && !size) {
      throw new AppError('You need to specify the size!', 400)
    }
    if (!page && size) {
      throw new AppError('You need to specify the page!', 400)
    }
    if (page && size) {
      const films = await listFilmService.execute(
        parseInt(page as string),
        parseInt(size as string),
      )
      response.send(films)
    } else {
      const { films } = await listFilmService.execute()
      response.send(films)
    }
  }
}

export const filmController = new FilmController()
