import { onCleanup, onMount } from 'solid-js'
import render from './render'
import { CANVAS_SIZE } from '../engine/constants/interface'
import { Engine } from '../engine'

const engine = new Engine()

function Canvas() {
    let canvasRef: HTMLCanvasElement | undefined

    onMount(() => {
        if (!canvasRef) return
        const handleClick = (e: MouseEvent) => {
            engine.select(e)
        }

        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.isComposing || e.key === 'Escape') {
                engine.resetUserState()
                return
            }
        }

        canvasRef.addEventListener('click', handleClick)
        window.addEventListener('keydown', handleKeyPress)

        const ctx = canvasRef.getContext('2d')

        if (!ctx) return
        let frame = requestAnimationFrame(loop)

        function loop(time: number) {
            frame = requestAnimationFrame(loop)
            render(ctx!, engine, time)
        }

        onCleanup(() => {
            if (canvasRef) {
                canvasRef.removeEventListener('click', handleClick)
                window.removeEventListener('keydown', handleKeyPress)
            }

            cancelAnimationFrame(frame)
        })
    })

    return (
        <canvas
            ref={canvasRef}
            id="chess"
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
        />
    )
}

export default Canvas
