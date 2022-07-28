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

export interface Impl<T = any> {
  prefix: string

  match (value: any): boolean
  deflate (value: T, deflate: DeepImpl): Result<any, any>
  inflate (data: any, inflate: DeepImpl): Result<T, any>
}
