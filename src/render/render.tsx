import { Engine } from '../engine'
import { CELL_COLOR, CANVAS_SIZE, CELL_SIZE, TEXT_OFFSET } from './constants'

const chess = new Engine()

export default function render(c: CanvasRenderingContext2D, time: number) {
    c.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    c.strokeStyle = 'black'
    c.strokeRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)

    for (let column = 0; column < chess.board.length; column++) {
        for (let row = 0; row < chess.board[column].length; row++) {
            const square = chess.board[column][row]
            const [x, y] = [CELL_SIZE * column, CELL_SIZE * row]
            c.fillStyle =
                square.cellColor === 'w' ? CELL_COLOR.light : CELL_COLOR.dark
            c.fillRect(x, y, CELL_SIZE, CELL_SIZE)
            c.fillStyle =
                square.cellColor === 'w' ? CELL_COLOR.dark : CELL_COLOR.light
            c.fillText(
                square.square,
                x + TEXT_OFFSET,
                y + CELL_SIZE - TEXT_OFFSET
            )

            if (square.image) {
                c.drawImage(square.image!, x, y, CELL_SIZE, CELL_SIZE)
            }
        }
    }
}
