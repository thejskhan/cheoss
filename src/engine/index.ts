import { CELL_COLOR, CELL_SIZE } from '../render/constants'
import { RANKS, FILES, IBoard } from './constants'
import type { TColor, TPosition, TSquare } from './types'

// type TState = {
//     board: TPosition[]
//     whiteToPlay: boolean
//     blackCastling: boolean
//     whiteCastling: boolean
//     whiteInCheck: boolean
//     blackInCheck: boolean
//     gameEnded: boolean
// }

// EXPECTED BOARD
// A8, B8, C8...
// ...
// A1, B1, C1...

export class Piece {
    position: TPosition
    color: TColor
    constructor(position: TPosition, color: TColor) {
        this.position = position
        this.color = color
    }
}

export class Pawn extends Piece {
    asset: string
    possibleMoves: TPosition[]
    constructor(position: TPosition, color: TColor) {
        super(position, color)
        this.asset = `${color}p`
        this.possibleMoves = []
    }
}

export class Square {
    position: TPosition
    cellColor: TColor
    square: TSquare
    piece: string | undefined
    image: HTMLImageElement | undefined
    x: number
    y: number
    constructor(
        position: TPosition,
        cellColor: TColor,
        piece: string,
        x: number,
        y: number
    ) {
        this.position = position
        this.cellColor = cellColor
        this.square = `${position[0]}${position[1]}`
        this.piece = piece
        this.image = piece ? new Image() : undefined
        this.x = x
        this.y = y

        if (this.image) {
            this.image.src = `/assets/${
                this.piece.toLowerCase() === piece ? 'b' : 'w'
            }${piece.toLowerCase()}.svg`
        }
    }

    draw(c: CanvasRenderingContext2D) {
        c.fillStyle =
            this.cellColor === 'w' ? CELL_COLOR.light : CELL_COLOR.dark
        c.fillRect(this.x, this.y, CELL_SIZE, CELL_SIZE)

        if (this.image) {
            c.drawImage(this.image!, this.x, this.y, CELL_SIZE, CELL_SIZE)
        }
    }
}

export class Engine {
    board: Square[][]
    constructor() {
        this.board = FILES.map((file, row) =>
            RANKS.map((rank, column) => {
                return new Square(
                    [file, rank],
                    row % 2 === column % 2 ? 'w' : 'b',
                    IBoard[column][row],
                    CELL_SIZE * column,
                    CELL_SIZE * row
                )
            })
        )
    }
}
