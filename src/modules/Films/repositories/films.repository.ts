import { AppError } from 'shared/errors/AppError'

class FilmRepository {
  async list(): Promise<[]> {
    return []
  }
}

export const filmRepository = new FilmRepository()
