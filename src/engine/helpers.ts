import { FILES_INDEX, RANKS_INDEX } from './constants'
import type { TPosition, TSquare } from './types'

export const getPositionIndexes = (squareName: TSquare) => {
    const [file, rank] = squareName.split('') as TPosition
    return [FILES_INDEX[file], RANKS_INDEX[rank]]
}
