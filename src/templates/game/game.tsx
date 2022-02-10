import * as React from 'react'
import { useAtom } from 'jotai'
import { stepAtom } from '../../store'
import { SGameContainer } from './styled/SGameContainer'
import { Step1 } from './components/step-1/step-1'
import { Step2 } from './components/step-2/step-2'

export interface IShapeCustomProps {
    onClick: () => void
    className?: string
}

export function Game() {
    const [step] = useAtom(stepAtom)

    return (
        <SGameContainer>
            {step === 'infinity' && <Step1 />}
            {step === 'endgame' && <Step2 />}
        </SGameContainer>
    )
}
