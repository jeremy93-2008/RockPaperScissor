import * as React from 'react'
import { SScoreContainer } from './styled/SScoreContainer'
import { SScoreTitle } from './styled/SScoreTitle'
import { SScoreText } from './styled/SScoreText'

interface IScoreProps {
    score: number
}

export function Score({ score }: IScoreProps) {
    return (
        <SScoreContainer>
            <SScoreTitle>Score</SScoreTitle>
            <SScoreText>{score}</SScoreText>
        </SScoreContainer>
    )
}
