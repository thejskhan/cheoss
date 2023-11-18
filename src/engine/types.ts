import { TFiles, TRanks } from './constants'

// HELPER TYPES
export type ParseInt<T> = T extends `${infer N extends number}` ? N : never

export type SplitPosition<S extends string> = S extends `${infer T}${infer U}`
    ? [T, ParseInt<U>]
    : [S]

// ENGINE TYPES
export type TColor = 'w' | 'b'
export type TSquare = `${TFiles[number]}${TRanks[number]}`
export type TPosition = SplitPosition<TSquare>
