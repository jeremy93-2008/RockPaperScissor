import * as React from 'react'
import { useEffect, useState } from 'react'
import { SStep2Container, SStep2InnerContainer } from './styled/SStep2Container'
import { useAtom } from 'jotai'
import {
    IShape,
    scoreAtom,
    shapeSelectedAtom,
    stepAtom,
} from '../../../../store'
import { useRandomShape } from '../../../../hooks/useRandomShape'
import { ShapeByName } from './components/ShapeByName'
import { useGameCalculation } from '../../../../hooks/useGameCalculation'
import { SPlayAgainBtn } from './styled/SPlayAgainBtn'

export function Step2() {
    const [_step, setStep] = useAtom(stepAtom)
    const [_score, setScore] = useAtom(scoreAtom)
    const [selectedShape] = useAtom(shapeSelectedAtom)
    const [turnEnd, setTurnEnd] = useState<{
        winner?: 'you' | 'computer' | 'none'
    }>({})
    const [computerShape, setComputerShape] = useState<IShape>(null)

    const calculateWinner = useGameCalculation()
    const getRandomShape = useRandomShape()

    const onClickPlayAgain = () => {
        setStep('infinity')
    }

    useEffect(() => {
        setTimeout(() => {
            setComputerShape(getRandomShape())
        }, 500)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (!selectedShape || !computerShape) return
            const resultGame = calculateWinner(selectedShape, computerShape)
            if (resultGame === undefined) return setTurnEnd({ winner: 'none' })
            if (resultGame) setScore((prevScore) => prevScore + 1)
            if (!resultGame) setScore((prevScore) => prevScore - 1)
            return setTurnEnd({ winner: resultGame ? 'you' : 'computer' })
        }, 100)
    }, [computerShape])

    return (
        <SStep2Container>
            <SStep2InnerContainer>
                <p>You Picked</p>
                <div>
                    <ShapeByName
                        className={turnEnd.winner === 'you' ? 'winner' : ''}
                        name={selectedShape}
                        onClick={() => {}}
                    />
                </div>
            </SStep2InnerContainer>
            <SStep2InnerContainer
                className={turnEnd.winner ? 'opacity-100' : 'opacity-0'}
            >
                <p>
                    {turnEnd.winner === 'you' && 'You Win'}
                    {turnEnd.winner === 'computer' && 'You Lose'}
                    {turnEnd.winner === 'none' && 'You Draw'}
                </p>
                <SPlayAgainBtn onClick={onClickPlayAgain}>
                    Play Again
                </SPlayAgainBtn>
            </SStep2InnerContainer>
            <SStep2InnerContainer>
                <p>The House Picked</p>
                <div>
                    {!computerShape && (
                        <div className="w-[130px] h-[130px] bg-[#192978] rounded-full" />
                    )}
                    {computerShape && (
                        <ShapeByName
                            className={
                                turnEnd.winner === 'computer' ? 'winner' : ''
                            }
                            name={computerShape}
                            onClick={() => {}}
                        />
                    )}
                </div>
            </SStep2InnerContainer>
        </SStep2Container>
    )
}
