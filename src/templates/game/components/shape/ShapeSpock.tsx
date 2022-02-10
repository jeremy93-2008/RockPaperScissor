import { Shape } from '../../../../components/shape/shape'
import * as React from 'react'
import { IShapeCustomProps } from '../../game'
import spock from '../../../../assets/icon-spock.svg'

export function ShapeSpock({ className, onClick }: IShapeCustomProps) {
    return (
        <Shape
            color={'hsl(189, 59%, 53%)'}
            shadowColor={'hsl(189,60%,38%)'}
            onClick={onClick}
            className={className}
        >
            <img src={spock} />
        </Shape>
    )
}
