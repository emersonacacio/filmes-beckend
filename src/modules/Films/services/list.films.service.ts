import { IFlim } from 'types/data'
import { filmRepository } from '../repositories/films.repository'

interface IResults {
  films: IFlim[]
  pageNumber?: number
}

class ListFilmService {
  async execute(page?: number, size?: number): Promise<IResults> {
    const data = await filmRepository.list()
    if (page && size) {
      const startIndex = (page - 1) * size
      const endIndex = startIndex + size
      const pageNumber = Math.ceil((data.length + 1) / size)

      return { films: data.slice(startIndex, endIndex), pageNumber }
    } else {
      return { films: data }
    }
  }
}

export const listFilmService = new ListFilmService()
