import { unzip } from 'lodash'
import { type TUserState } from '../helpers/types'

export const RANKS = [8, 7, 6, 5, 4, 3, 2, 1] as const
export const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const

export type TRanks = typeof RANKS
export type TFiles = typeof FILES

export const RANKS_INDEX = {
    8: 0,
    7: 1,
    6: 2,
    5: 3,
    4: 4,
    3: 5,
    2: 6,
    1: 7,
} as Record<TRanks[number], number>

export const FILES_INDEX = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
} as Record<TFiles[number], number>

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

export const IUserState = {
    mouseX: 0,
    mouseY: 0,
    selectedSquare: undefined,
} as TUserState
