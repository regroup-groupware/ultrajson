import { Impl } from '../../types'

export const StringImpl: Impl<string> = {
  prefix: 'str',

  match (value) {
    return typeof value === 'string'
  },
  deflate (value) {
    return {
      success: true,
      value
    }
  },
  inflate (value) {
    return (typeof value === 'string')
      ? {
        success: true,
        value
      }
      : {
        success: false
      }
  }
}
