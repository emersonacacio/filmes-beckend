import { Request, Response } from 'express'

import { listFilmService } from '../services/list.films.service'

class FilmController {
  async list(request: Request, response: Response) {
    const listaDeFilms = await listFilmService.execute()
    response.send(listaDeFilms)
  }
}

export const filmController = new FilmController()
