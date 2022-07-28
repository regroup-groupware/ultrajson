import { Impl } from '../../types'

export const ArrayImpl: Impl<Array<any>> = {
  prefix: 'arr',

  match (value) {
    return Array.isArray(value)
  },
  deflate (value, deflate) {
    return {
      success: true,
      value: value.map(deflate)
    }
  },
  inflate (value, inflate) {
    return (Array.isArray(value))
      ? {
        success: true,
        value: value.map(inflate)
      }
      : {
        success: false
      }
  }
}
