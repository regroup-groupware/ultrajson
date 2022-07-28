import { Impl } from './types'
import { StringImpl } from './parsers/impls/StringImpl'
import { NullImpl } from './parsers/impls/NullImpl'
import { NumberImpl } from './parsers/impls/NumberImpl'
import { UndefinedImpl } from './parsers/impls/UndefinedImpl'
import { BooleanImpl } from './parsers/impls/BooleanImpl'
import { ArrayImpl } from './parsers/impls/ArrayImpl'

const impls = {
  [StringImpl.prefix]: StringImpl,
  [NumberImpl.prefix]: NumberImpl,
  [BooleanImpl.prefix]: BooleanImpl,
  [ArrayImpl.prefix]: ArrayImpl,
  [NullImpl.prefix]: NullImpl,
  [UndefinedImpl.prefix]: UndefinedImpl,
} as const

export function parse (obj: any):  {

}

export function stringify () {

}
