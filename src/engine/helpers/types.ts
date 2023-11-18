import { TFiles, TRanks } from '../constants/engine'

// HELPER TYPES
export type ParseInt<T> = T extends `${infer N extends number}` ? N : never

export type SplitPosition<S extends string> = S extends `${infer T}${infer U}`
    ? [T, ParseInt<U>]
    : [S]

// TYPES
export type TColor = 'w' | 'b'
export type TSquare = `${TFiles[number]}${TRanks[number]}`
export type TPosition = SplitPosition<TSquare>
export type TUserState = {
    mouseX: number | undefined
    mouseY: number | undefined
    selected: TSquare | undefined
}
