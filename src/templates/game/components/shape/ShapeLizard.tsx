import { Shape } from '../../../../components/shape/shape'
import * as React from 'react'
import { IShapeCustomProps } from '../../game'
import lizard from '../../../../assets/icon-lizard.svg'

export function ShapeLizard({ className, onClick }: IShapeCustomProps) {
    return (
        <Shape
            color={'hsl(261, 73%, 60%)'}
            shadowColor={'hsl(261,63%,34%)'}
            onClick={onClick}
            className={className}
        >
            <img src={lizard} />
        </Shape>
    )
}
