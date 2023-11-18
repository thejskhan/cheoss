import { CELL_COLOR, CELL_SIZE, TEXT_OFFSET } from '../render/constants'
import { RANKS, FILES, IBoard } from './constants'
import { getPositionIndexes } from './helpers'
import type { TColor, TPosition, TSquare } from './types'

export class Piece {
    square: Square
    position: TPosition
    name: string
    x: number
    y: number
    color: TColor
    image: HTMLImageElement
    possibleMoves: TPosition[]
    constructor(
        square: Square,
        position: TPosition,
        name: string,
        x: number,
        y: number
    ) {
        this.square = square
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
    constructor(
        square: Square,
        position: TPosition,
        name: string,
        x: number,
        y: number
    ) {
        super(square, position, name, x, y)
        this.image.src = `/assets/${this.color}p.svg`
    }
}

export class Knight extends Piece {
    constructor(
        square: Square,
        position: TPosition,
        name: string,
        x: number,
        y: number
    ) {
        super(square, position, name, x, y)
        this.image.src = `/assets/${this.color}n.svg`
    }
}

export class Bishop extends Piece {
    constructor(
        square: Square,
        position: TPosition,
        name: string,
        x: number,
        y: number
    ) {
        super(square, position, name, x, y)
        this.image.src = `/assets/${this.color}b.svg`
    }
}

export class Rook extends Piece {
    constructor(
        square: Square,
        position: TPosition,
        name: string,
        x: number,
        y: number
    ) {
        super(square, position, name, x, y)
        this.image.src = `/assets/${this.color}r.svg`
    }
}

export class Queen extends Piece {
    constructor(
        square: Square,
        position: TPosition,
        name: string,
        x: number,
        y: number
    ) {
        super(square, position, name, x, y)
        this.image.src = `/assets/${this.color}q.svg`
    }
}

export class King extends Piece {
    constructor(
        square: Square,
        position: TPosition,
        name: string,
        x: number,
        y: number
    ) {
        super(square, position, name, x, y)
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
                this.piece = new Pawn(
                    this,
                    this.position,
                    piece,
                    this.x,
                    this.y
                )
                break
            case 'n':
            case 'N':
                this.piece = new Knight(
                    this,
                    this.position,
                    piece,
                    this.x,
                    this.y
                )
                break
            case 'b':
            case 'B':
                this.piece = new Bishop(
                    this,
                    this.position,
                    piece,
                    this.x,
                    this.y
                )
                break
            case 'r':
            case 'R':
                this.piece = new Rook(
                    this,
                    this.position,
                    piece,
                    this.x,
                    this.y
                )
                break
            case 'q':
            case 'Q':
                this.piece = new Queen(
                    this,
                    this.position,
                    piece,
                    this.x,
                    this.y
                )
                break
            case 'k':
            case 'K':
                this.piece = new King(
                    this,
                    this.position,
                    piece,
                    this.x,
                    this.y
                )
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
                    [file, rank] as TPosition,
                    row % 2 === column % 2 ? 'w' : 'b',
                    IBoard[column][row],
                    CELL_SIZE * column,
                    CELL_SIZE * row
                )
            })
        )

        this.move('e2', 'e4')
    }

    findSquare(squareName: TSquare) {
        const [fileIndex, rankIndex] = getPositionIndexes(squareName)
        return this.board[fileIndex][rankIndex]
    }

    move(from: TSquare, to: TSquare) {
        const fromSquare = this.findSquare(from)
        const toSquare = this.findSquare(to)

        if (fromSquare.piece) {
            toSquare.piece = fromSquare.piece
            fromSquare.piece = undefined
            toSquare.piece.x = toSquare.x
            toSquare.piece.y = toSquare.y
        }
    }
}
