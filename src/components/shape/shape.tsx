import * as React from 'react'
import { SShape } from './components/SShape'

export interface IShapeProps extends JSX.ElementChildrenAttribute {
    color: string
    shadowColor: string
    onClick: () => void
    className?: string
}

export function Shape({
    color,
    shadowColor,
    className,
    onClick,
    children,
}: IShapeProps) {
    return (
        <SShape
            onClick={onClick}
            color={color}
            shadowColor={shadowColor}
            className={className}
        >
            {children}
        </SShape>
    )
}
