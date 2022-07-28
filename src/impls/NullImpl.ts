import { Impl } from '../types'

export const NullImpl: Impl<null> = {
  prefix: 'null',

  match (value) {
    return value === null
  },
  deflate () {
    return {
      success: true
    }
  },
  inflate () {
    return {
      success: true,
      value: null
    }
  }
}
