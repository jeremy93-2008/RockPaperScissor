import { IShape } from '../../../../../store'
import { ShapePaper } from '../../shape/ShapePaper'
import { ShapeRock } from '../../shape/ShapeRock'
import { ShapeScissor } from '../../shape/ShapeScissor'
import { ShapeLizard } from '../../shape/ShapeLizard'
import { ShapeSpock } from '../../shape/ShapeSpock'
import * as React from 'react'

interface IShapeByKey {
    name: IShape
    onClick: () => void
    className?: string
}

export function ShapeByName({ name, className, onClick }: IShapeByKey) {
    return (
        <>
            {name === 'paper' && (
                <ShapePaper className={className} onClick={onClick} />
            )}
            {name === 'rock' && (
                <ShapeRock className={className} onClick={onClick} />
            )}
            {name === 'scissor' && (
                <ShapeScissor className={className} onClick={onClick} />
            )}
            {name === 'lizard' && (
                <ShapeLizard className={className} onClick={onClick} />
            )}
            {name === 'spock' && (
                <ShapeSpock className={className} onClick={onClick} />
            )}
        </>
    )
}
