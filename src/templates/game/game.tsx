import * as React from 'react'
import { useAtom } from 'jotai'
import { Shape } from '../../components/shape/shape'
import { gameTypeAtom } from '../../store'
import { SGameContainer } from './styled/SGameContainer'
import {
    SGameShapeContainer,
    SGameShapeInnerContainer,
} from './styled/SGameShapeContainer'

import triangle from '../../assets/bg-triangle.svg'
import pentagon from '../../assets/bg-pentagon.svg'

import spock from '../../assets/icon-spock.svg'
import lizard from '../../assets/icon-lizard.svg'
import { ShapePaper } from './components/ShapePaper'
import { ShapeRock } from './components/ShapeRock'
import { ShapeScissor } from './components/ShapeScissor'

export interface IShapeCustomProps {
    onClick: () => void
    className?: string
}

export function Game() {
    const [type] = useAtom(gameTypeAtom)

    return (
        <SGameContainer>
            <img src={type === 'bonus' ? pentagon : triangle} />
            <SGameShapeContainer className={'-mt-[55px]'}>
                {type === 'normal' ? (
                    <>
                        <SGameShapeInnerContainer>
                            <ShapePaper
                                className="mr-[120px]"
                                onClick={() => {}}
                            />
                            <ShapeScissor onClick={() => {}} />
                        </SGameShapeInnerContainer>
                        <SGameShapeInnerContainer className={'mt-[100px]'}>
                            <ShapeRock onClick={() => {}} />
                        </SGameShapeInnerContainer>
                    </>
                ) : (
                    <>
                        <SGameShapeInnerContainer>
                            <ShapeScissor onClick={() => {}} />
                        </SGameShapeInnerContainer>
                        <SGameShapeInnerContainer
                            className="-mt-4 mb-6"
                            justify={'space-around'}
                        >
                            <Shape
                                color={'hsl(189, 59%, 53%)'}
                                shadowColor={'hsl(189,60%,38%)'}
                                onClick={() => {}}
                            >
                                <img src={spock} />
                            </Shape>
                            <ShapePaper onClick={() => {}} />
                        </SGameShapeInnerContainer>
                        <SGameShapeInnerContainer className={'mt-10'}>
                            <Shape
                                color={'hsl(261, 73%, 60%)'}
                                shadowColor={'hsl(261,63%,34%)'}
                                onClick={() => {}}
                                className={'mr-10'}
                            >
                                <img src={lizard} />
                            </Shape>
                            <ShapeRock onClick={() => {}} />
                        </SGameShapeInnerContainer>
                    </>
                )}
            </SGameShapeContainer>
        </SGameContainer>
    )
}
