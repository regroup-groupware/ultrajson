import { inspect } from 'util'

import { Impl } from './types'

import { UltrajsonDeflateError, UltrajsonDepthError, UltrajsonInflateError } from './errors'

import { StringImpl } from './impls/StringImpl'
import { NumberImpl } from './impls/NumberImpl'
import { BooleanImpl } from './impls/BooleanImpl'
import { ArrayImpl } from './impls/ArrayImpl'
import { NullImpl } from './impls/NullImpl'
import { UndefinedImpl } from './impls/UndefinedImpl'
import { DateImpl } from './impls/DateImpl'
import { MapImpl } from './impls/MapImpl'
import { SetImpl } from './impls/SetImpl'

const impls = {
  [StringImpl.prefix]: StringImpl,
  [NumberImpl.prefix]: NumberImpl,
  [BooleanImpl.prefix]: BooleanImpl,
  [ArrayImpl.prefix]: ArrayImpl,
  [NullImpl.prefix]: NullImpl,
  [UndefinedImpl.prefix]: UndefinedImpl,
  [DateImpl.prefix]: DateImpl,
  [MapImpl.prefix]: MapImpl,
  [SetImpl.prefix]: SetImpl,
} as const

export function deflate (obj: any, impls: Record<string, Impl>, maxDepth = Infinity, depth = 0): any {
  if (depth > maxDepth) {
    throw new UltrajsonDepthError('Maximum depth has been exceeded.')
  }

  if (typeof obj === 'object') {
    const matchedImpl = Object.keys(impls).find(key => impls[key].match(obj))

    if (matchedImpl) {
      const result = impls[matchedImpl].deflate(obj, v => deflate(v, impls, maxDepth, depth + 1))

      if (!result?.success) {
        throw new UltrajsonDeflateError('Failed to deflate object.')
      }

      return result.value == null ? [matchedImpl] : [matchedImpl, result.value]
    }

    return Object.keys(obj).reduce((p, el) => {
        p[el] = deflate(obj[el], impls, maxDepth, depth + 1)
        return p
      }, {} as any)
  } else {
    const matchedImpl = Object.keys(impls).find(key => impls[key].match(obj))

    const result = matchedImpl
      ? impls[matchedImpl].deflate(obj, v => deflate(v, impls, maxDepth, depth + 1))
      : undefined

    if (!result?.success) {
      throw new UltrajsonDeflateError('Failed to deflate primitive.')
    }

    return result.value == null ? [matchedImpl] : [matchedImpl, result.value]
  }
}

export function inflate (obj: any, impls: Record<string, Impl>, maxDepth = Infinity, depth = 0): any {
  if (depth > maxDepth) {
    throw new UltrajsonDepthError('Maximum depth has been exceeded.')
  }

  if (typeof obj === 'object' && !Array.isArray(obj)) {
    return Object.keys(obj).reduce((p, el) => {
      p[el] = inflate(obj[el], impls, maxDepth, depth + 1)
      return p
    }, {} as any)
  } else if (Array.isArray(obj)) {
    const [matchedImpl, value] = obj

    const result = impls[matchedImpl]?.inflate(value, v => inflate(v, impls, maxDepth, depth + 1))

    if (!result?.success) {
      throw new UltrajsonInflateError('Failed to inflate data.')
    }

    return result.value
  } else {
    return obj
  }
}

export function stringify (obj: any): string {
  return JSON.stringify(deflate(obj, impls), null, 2)
}

export function parse (data: string): any {
  return inflate(JSON.parse(data), impls)
}

const orig: any = {}
orig.orig = orig

const str = stringify(orig)
const pass = parse(str)

console.log(orig, pass)
