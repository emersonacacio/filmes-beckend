import { promises as fs } from 'fs'
import { IFlim } from 'types/data'
const { readFile } = fs

export async function helperGetData(): Promise<IFlim[]> {
  const file = await readFile(process.env.FILE_NAME)
  const data: IFlim[] = JSON.parse(file.toString())
  return data
}
