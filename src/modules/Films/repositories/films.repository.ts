import { helperGetData } from 'helper/helperGetData'
import { IFlim } from 'types/data'

class FilmRepository {
  async list(): Promise<IFlim[]> {
    const data = await helperGetData()
    return data
  }
}

export const filmRepository = new FilmRepository()
