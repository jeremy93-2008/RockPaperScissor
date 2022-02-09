import * as React from 'react'
import { SContainer } from './styled/SContainer'
import { Footer } from './footer/footer'

export function App() {
    return (
        <SContainer>
            <h1>Hello World</h1>
            <p>This is my first React app</p>
            <Footer />
        </SContainer>
    )
}
