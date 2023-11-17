import { unzip } from 'lodash'
export const RANKS = [8, 7, 6, 5, 4, 3, 2, 1] as const
export const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const

export type TRanks = typeof RANKS
export type TFiles = typeof FILES

// prettier-ignore
export const IBoard = unzip([
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['' , '' , '' , '' , '' , '' , '' , '' ],
    ['' , '' , '' , '' , '' , '' , '' , '' ],
    ['' , '' , '' , '' , '' , '' , '' , '' ],
    ['' , '' , '' , '' , '' , '' , '' , '' ],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
])
