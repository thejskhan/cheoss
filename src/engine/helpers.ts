import { TPosition, TSquare } from './types'

// HELPER FUNCTIONS
export const getSquareName = (squareName: TSquare) => {
    return squareName.split('') as TPosition
}
