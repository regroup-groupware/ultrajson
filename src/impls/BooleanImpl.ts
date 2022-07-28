import { Impl } from '../types'

export const BooleanImpl: Impl = {
  prefix: 'bool',

  match (value) {
    return typeof value === 'boolean'
  },
  deflate (value) {
    return {
      success: true,
      value: value
    }
  },
  inflate (value) {
    return (typeof value === 'boolean')
      ? {
        success: true,
        value
      }
      : {
        success: false
      }
  }
}
