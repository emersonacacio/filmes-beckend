export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FILE_NAME: string
    }
  }
}
