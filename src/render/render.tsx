import { Engine } from '../engine'
import { CANVAS_SIZE } from '../engine/constants/interface'

export default function render(
    c: CanvasRenderingContext2D,
    engine: Engine,
    time: number
) {
    c.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    c.strokeStyle = 'black'
    c.strokeRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)

    for (let column = 0; column < engine.board.length; column++) {
        for (let row = 0; row < engine.board[column].length; row++) {
            const square = engine.board[column][row]
            square.draw(c)
            square.piece?.draw(c)
        }
    }
}
