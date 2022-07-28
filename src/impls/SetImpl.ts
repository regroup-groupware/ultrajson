import { Impl } from '../types'

export const SetImpl: Impl<Set<any>> = {
  prefix: 'set',

  match (value) {
    return value instanceof Set
  },
  deflate (value) {
    return {
      success: true,
      value: value.entries()
    }
  },
  inflate (value) {
    return (Array.isArray(value))
      ? {
        success: true,
        value: new Set(value)
      }
      : {
        success: false
      }
  }
}
