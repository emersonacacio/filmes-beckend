import { IFlim } from 'types/data'
import { filmRepository } from '../repositories/films.repository'

interface IResults {
  films: IFlim[]
  listLength?: number
}

class ListFilmService {
  async execute(page?: number, size?: number): Promise<IResults> {
    const data = await filmRepository.list()
    if (page && size) {
      const startIndex = (page - 1) * size
      const endIndex = startIndex + size
      const listLength = data.length

      return { films: data.slice(startIndex, endIndex), listLength }
    } else {
      return { films: data }
    }
  }
}

export const listFilmService = new ListFilmService()
