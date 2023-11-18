import { FILES, RANKS } from './engine'

export const COLORS = {
    w: {
        background: '#ddb180',
        foreground: '#7c330c',
    },
    b: {
        background: '#7c330c',
        foreground: '#ddb180',
    },
    highlight: {
        background: '#fff',
        foreground: '#000',
    },
}

export const CANVAS_SIZE = 800

export const BOARD_SIZE = 8

export const CELL_SIZE = CANVAS_SIZE / BOARD_SIZE

export const BORDER_SIZE = CELL_SIZE / 16

export const TEXT_OFFSET = 12

export const BOARDEdges = {
    files: FILES.map((file, i) => ({
        edge: CANVAS_SIZE / BOARD_SIZE + i * CELL_SIZE,
        name: file,
    })),
    ranks: RANKS.map((rank, i) => ({
        edge: CANVAS_SIZE / BOARD_SIZE + i * CELL_SIZE,
        name: rank,
    })),
}
