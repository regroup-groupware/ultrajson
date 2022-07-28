import { Impl } from '../types'

export const MapImpl: Impl<Map<any, any>> = {
  prefix: 'map',

  match (value) {
    return value instanceof Map
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
        value: new Map(value)
      }
      : {
        success: false
      }
  }
}
