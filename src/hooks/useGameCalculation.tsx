import { IShape } from '../store'
import { WinRules } from '../rules'

export function useGameCalculation() {
    return (youShape: IShape, computerShape: IShape) => {
        if (youShape === computerShape) return
        return !!WinRules.find(
            (rule) => rule.you === youShape && rule.computer === computerShape
        )
    }
}
