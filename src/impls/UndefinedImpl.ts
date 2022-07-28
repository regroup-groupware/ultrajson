import { Impl } from '../types'

export const UndefinedImpl: Impl = {
  prefix: 'undef',

  match (value) {
    return value === undefined
  },
  deflate () {
    return {
      success: true
    }
  },
  inflate () {
    return {
      success: true,
      value: undefined
    }
  }
}
