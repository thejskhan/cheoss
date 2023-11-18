import { FILES_INDEX, RANKS_INDEX } from '../constants/engine'
import type { TPosition, TSquare } from './types'
import { BOARDEdges } from '../constants/interface'

export const getPositionIndexes = (squareName: TSquare) => {
    const [file, rank] = squareName.split('') as TPosition
    return [FILES_INDEX[file], RANKS_INDEX[rank]]
}

export const getSquareFromMouse = (x: number, y: number) => {
    const file = BOARDEdges.files.reduce((prev, next) => {
        if (x >= prev.edge && x < next.edge) {
            return next
        }
        return prev
    })

    const rank = BOARDEdges.ranks.reduce((prev, next) => {
        if (y >= prev.edge && y < next.edge) {
            return next
        }
        return prev
    })

    return `${file.name}${rank.name}` as TSquare
}
