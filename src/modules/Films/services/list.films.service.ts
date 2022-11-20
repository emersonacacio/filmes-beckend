import { filmRepository } from '../repositories/films.repository'

class ListFilmService {
  async execute(): Promise<[]> {
    return await filmRepository.list()
  }
}

export const listFilmService = new ListFilmService()
