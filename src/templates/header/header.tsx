import * as React from 'react'
import { SHeaderContainer } from './styled/SHeaderContainer'

export function Header({ children }: JSX.ElementChildrenAttribute) {
    return <SHeaderContainer>{children}</SHeaderContainer>
}
