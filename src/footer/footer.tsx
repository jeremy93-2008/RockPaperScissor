import * as React from 'react'
import { SFooterContainer } from './styled/SFooterContainer'
import { SFooterBtn } from './styled/SFooterBtn'

export function Footer() {
    return (
        <SFooterContainer>
            <SFooterBtn>Change</SFooterBtn>
            <SFooterBtn>Rules</SFooterBtn>
        </SFooterContainer>
    )
}
