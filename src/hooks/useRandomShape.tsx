import { gameTypeAtom, IShape } from '../store'
import { useAtom } from 'jotai'

export function useRandomShape() {
    const [type] = useAtom(gameTypeAtom)
    const shapes: IShape[] =
        type === 'bonus'
            ? ['paper', 'spock', 'lizard', 'rock', 'scissor']
            : ['paper', 'scissor', 'rock']

    return () => {
        const random = Math.floor(Math.random() * shapes.length)
        return shapes[random]
    }
}
