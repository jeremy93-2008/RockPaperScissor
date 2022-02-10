import * as React from 'react'
import { SMainContainer } from './styled/SMainContainer'

export function Main({ children }: JSX.ElementChildrenAttribute) {
    return (
        <SMainContainer>
            <span>{children}</span>
        </SMainContainer>
    )
}
