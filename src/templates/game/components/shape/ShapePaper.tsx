import { Shape } from '../../../../components/shape/shape'
import * as React from 'react'
import { IShapeCustomProps } from '../../game'
import paper from '../../../../assets/icon-paper.svg'

export function ShapePaper({ className, onClick }: IShapeCustomProps) {
    return (
        <Shape
            color={'hsl(230, 89%, 62%)'}
            shadowColor={'hsl(230,63%,42%)'}
            onClick={onClick}
            className={className}
        >
            <img src={paper} />
        </Shape>
    )
}
