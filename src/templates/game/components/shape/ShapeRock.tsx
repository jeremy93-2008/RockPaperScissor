import { Shape } from '../../../../components/shape/shape'
import rock from '../../../../assets/icon-rock.svg'
import * as React from 'react'
import { IShapeCustomProps } from '../../game'

export function ShapeRock({ className, onClick }: IShapeCustomProps) {
    return (
        <Shape
            color={'hsl(349, 71%, 52%)'}
            shadowColor={'hsl(349,67%,38%)'}
            onClick={onClick}
            className={className}
        >
            <img src={rock} />
        </Shape>
    )
}
