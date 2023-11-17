import { onCleanup, onMount } from 'solid-js'
import render from './render'
import { CANVAS_SIZE } from './constants'

function Canvas() {
    let canvasRef: HTMLCanvasElement | undefined

    onMount(() => {
        if (!canvasRef) return
        let mouseX = 0
        let mouseY = 0
        canvasRef.addEventListener('click', (e) => {
            mouseX = e.offsetX
            mouseY = e.offsetY
            console.log(mouseX, mouseY)
        })
        const ctx = canvasRef.getContext('2d')

        if (!ctx) return
        let frame = requestAnimationFrame(loop)

        function loop(time: number) {
            frame = requestAnimationFrame(loop)
            render(ctx!, mouseX, mouseY, time)
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
