import { CELL_COLOR, CELL_SIZE, TEXT_OFFSET } from '../render/constants'
import { RANKS, FILES, IBoard } from './constants'
import type { TColor, TPosition, TSquare } from './types'

export class Piece {
    name: string
    position: TPosition
    color: TColor
    image: HTMLImageElement
    x: number
    y: number
    possibleMoves: TPosition[]
    constructor(position: TPosition, name: string, x: number, y: number) {
        this.position = position
        this.color = name.toLowerCase() === name ? 'b' : 'w'
        this.name = name
        this.image = new Image()
        this.x = x
        this.y = y
        this.possibleMoves = []
    }

    draw(c: CanvasRenderingContext2D) {
        c.drawImage(this.image, this.x, this.y, CELL_SIZE, CELL_SIZE)
    }
}

export class Pawn extends Piece {
    constructor(position: TPosition, name: string, x: number, y: number) {
        super(position, name, x, y)
        this.image.src = `/assets/${this.color}p.svg`
    }
}

export class Knight extends Piece {
    constructor(position: TPosition, name: string, x: number, y: number) {
        super(position, name, x, y)
        this.image.src = `/assets/${this.color}n.svg`
    }
}

export class Bishop extends Piece {
    constructor(position: TPosition, name: string, x: number, y: number) {
        super(position, name, x, y)
        this.image.src = `/assets/${this.color}b.svg`
    }
}

export class Rook extends Piece {
    constructor(position: TPosition, name: string, x: number, y: number) {
        super(position, name, x, y)
        this.image.src = `/assets/${this.color}r.svg`
    }
}

export class Queen extends Piece {
    constructor(position: TPosition, name: string, x: number, y: number) {
        super(position, name, x, y)
        this.image.src = `/assets/${this.color}q.svg`
    }
}

export class King extends Piece {
    constructor(position: TPosition, name: string, x: number, y: number) {
        super(position, name, x, y)
        this.image.src = `/assets/${this.color}k.svg`
    }
}

export class Square {
    position: TPosition
    cellColor: TColor
    name: TSquare
    piece: Piece | undefined
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
        this.name = `${position[0]}${position[1]}`
        this.x = x
        this.y = y

        switch (piece) {
            case 'p':
            case 'P':
                this.piece = new Pawn(this.position, piece, this.x, this.y)
                break
            case 'n':
            case 'N':
                this.piece = new Knight(this.position, piece, this.x, this.y)
                break
            case 'b':
            case 'B':
                this.piece = new Bishop(this.position, piece, this.x, this.y)
                break
            case 'r':
            case 'R':
                this.piece = new Rook(this.position, piece, this.x, this.y)
                break
            case 'q':
            case 'Q':
                this.piece = new Queen(this.position, piece, this.x, this.y)
                break
            case 'k':
            case 'K':
                this.piece = new King(this.position, piece, this.x, this.y)
                break
        }
    }

    draw(c: CanvasRenderingContext2D) {
        c.fillStyle =
            this.cellColor === 'w' ? CELL_COLOR.light : CELL_COLOR.dark
        c.fillRect(this.x, this.y, CELL_SIZE, CELL_SIZE)

        c.fillStyle =
            this.cellColor === 'w' ? CELL_COLOR.dark : CELL_COLOR.light

        c.fillText(
            this.name,
            this.x + TEXT_OFFSET,
            this.y + CELL_SIZE - TEXT_OFFSET
        )
    }
}

export class Engine {
    board: Square[][]
    constructor() {
        this.board = FILES.map((file, column) =>
            RANKS.map((rank, row) => {
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
