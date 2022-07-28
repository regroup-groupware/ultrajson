import { Impl } from '../types'

export const DateImpl: Impl<Date> = {
  prefix: 'date',

  match (value) {
    return value instanceof Date
  },
  deflate (value) {
    return {
      success: true,
      value: value.toISOString()
    }
  },
  inflate (value) {
    return (typeof value === 'string')
      ? {
        success: true,
        value: new Date(value)
      }
      : {
        success: false
      }
  }
}
