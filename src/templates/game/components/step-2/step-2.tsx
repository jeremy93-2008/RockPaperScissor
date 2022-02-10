import * as React from 'react'
import { SStep2Container, SStep2InnerContainer } from './styled/SStep2Container'
import { ShapePaper } from '../shape/ShapePaper'
import { useAtom } from 'jotai'
import { shapeSelectedAtom } from '../../../../store'
import { ShapeRock } from '../shape/ShapeRock'
import { ShapeScissor } from '../shape/ShapeScissor'
import { ShapeLizard } from '../shape/ShapeLizard'
import { ShapeSpock } from '../shape/ShapeSpock'

export function Step2() {
    const [selectedShape] = useAtom(shapeSelectedAtom)
    return (
        <SStep2Container>
            <SStep2InnerContainer>
                <p>You Picked</p>
                <div>
                    {selectedShape === 'paper' && (
                        <ShapePaper onClick={() => {}} />
                    )}
                    {selectedShape === 'rock' && (
                        <ShapeRock onClick={() => {}} />
                    )}
                    {selectedShape === 'scissor' && (
                        <ShapeScissor onClick={() => {}} />
                    )}
                    {selectedShape === 'lizard' && (
                        <ShapeLizard onClick={() => {}} />
                    )}
                    {selectedShape === 'spock' && (
                        <ShapeSpock onClick={() => {}} />
                    )}
                </div>
            </SStep2InnerContainer>
            <SStep2InnerContainer>
                <p>The House Picked</p>
                <div>
                    <div className="w-[125px] h-[125px] bg-[#192978] rounded-full"></div>
                </div>
            </SStep2InnerContainer>
        </SStep2Container>
    )
}
