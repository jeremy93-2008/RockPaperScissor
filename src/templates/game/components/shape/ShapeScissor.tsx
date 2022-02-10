import { Shape } from '../../../../components/shape/shape'
import * as React from 'react'
import { IShapeCustomProps } from '../../game'
import scissor from '../../../../assets/icon-scissors.svg'

export function ShapeScissor({ className, onClick }: IShapeCustomProps) {
    return (
        <Shape
            color={'hsl(39, 89%, 49%)'}
            shadowColor={'hsl(40, 73%, 35%)'}
            onClick={onClick}
            className={className}
        >
            <img src={scissor} />
        </Shape>
    )
}
