import { Engine } from '../engine'
import { CANVAS_SIZE } from './constants'

const chess = new Engine()

export default function render(
    c: CanvasRenderingContext2D,
    mouseX: number,
    mouseY: number,
    time: number
) {
    c.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    c.strokeStyle = 'black'
    c.strokeRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)

    for (let column = 0; column < chess.board.length; column++) {
        for (let row = 0; row < chess.board[column].length; row++) {
            const square = chess.board[column][row]
            square.draw(c)
            square.piece?.draw(c)
        }
    }
}
