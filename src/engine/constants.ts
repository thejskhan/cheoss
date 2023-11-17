import { unzip } from 'lodash'
export const RANKS = [8, 7, 6, 5, 4, 3, 2, 1] as const
export const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const

export const RANKS_I = {
    8: 0,
    7: 1,
    6: 2,
    5: 3,
    4: 4,
    3: 5,
    2: 6,
    1: 7,
} as const

export const FILES_I = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
} as const

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
