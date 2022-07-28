import { Impl } from '../types'

export const NumberImpl: Impl<number> = {
  prefix: 'num',

  match (value) {
    return typeof value === 'number'
  },
  deflate (value) {
    let _value: number | string = value

    if (value === Infinity) {
      _value = 'inf'
    } else if (value === -Infinity) {
      _value = '-inf'
    } else if (isNaN(value)) {
      _value = 'nan'
    } else if (Object.is(value, -0)) {
      _value = '-0'
    }

    return {
      success: true,
      value: _value
    }
  },
  inflate (value) {
    let _value

    if (typeof value === 'number') {
      _value = value
    } else if (value === 'inf') {
      _value = Infinity
    } else if (value === '-inf') {
      _value = -Infinity
    } else if (value === 'nan') {
      _value = NaN
    } else if (value === '-0') {
      _value = -0
    }

    return (_value === undefined)
      ? {
        success: false
      }
      : {
        success: true,
        value: _value
      }
  }
}
