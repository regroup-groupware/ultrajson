export interface WithType<T> {
  [x: string]: T | WithType<T>
}

interface ResultSuccess<T> {
  success: true
  value?: T
}

interface ResultError<E> {
  success: false
  error?: E
}

export type Result<T, E> = ResultSuccess<T> | ResultError<E>

export type DeepImpl = (value: any) => any

export interface Impl {
  prefix: string

  match (value: any): boolean
  deflate (value: any, deflate: DeepImpl): Result<any, any>
  inflate (data: any, inflate: DeepImpl): Result<any, any>
}
