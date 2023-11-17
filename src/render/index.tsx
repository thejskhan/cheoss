import { onCleanup, onMount } from 'solid-js'
import render from './render'
import { CANVAS_SIZE } from './constants'

function Canvas() {
    let canvasRef: HTMLCanvasElement | undefined

    onMount(() => {
        if (!canvasRef) return
        const ctx = canvasRef.getContext('2d')

        if (!ctx) return
        let frame = requestAnimationFrame(loop)

        function loop(time: number) {
            frame = requestAnimationFrame(loop)
            render(ctx!, time)
        }

        onCleanup(() => cancelAnimationFrame(frame))
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
