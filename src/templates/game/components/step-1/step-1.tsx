import { useAtom } from 'jotai'
import {
    gameTypeAtom,
    IShape,
    shapeSelectedAtom,
    stepAtom,
} from '../../../../store'
import pentagon from '../../../../assets/bg-pentagon.svg'
import triangle from '../../../../assets/bg-triangle.svg'
import { SStep1Container, SStep1InnerContainer } from './styled/SStep1Container'
import { ShapePaper } from '../shape/ShapePaper'
import { ShapeScissor } from '../shape/ShapeScissor'
import { ShapeRock } from '../shape/ShapeRock'
import * as React from 'react'
import { useCallback } from 'react'
import { ShapeSpock } from '../shape/ShapeSpock'
import { ShapeLizard } from '../shape/ShapeLizard'
import { SStep1Image } from './styled/SStep1Image'

export function Step1() {
    const [_shape, setShape] = useAtom(shapeSelectedAtom)
    const [_step, setStep] = useAtom(stepAtom)
    const [type] = useAtom(gameTypeAtom)

    const onShapeClick = useCallback((shapeName: IShape) => {
        return () => {
            setShape(shapeName)
            setStep('endgame')
        }
    }, [])

    return (
        <>
            <SStep1Image
                src={type === 'bonus' ? pentagon : triangle}
                alt="board"
            />
            <SStep1Container className={'-mt-[55px]'}>
                {type === 'normal' ? (
                    <>
                        <SStep1InnerContainer>
                            <ShapePaper
                                className="mr-[120px]"
                                onClick={onShapeClick('paper')}
                            />
                            <ShapeScissor onClick={onShapeClick('scissor')} />
                        </SStep1InnerContainer>
                        <SStep1InnerContainer className={'mt-[100px]'}>
                            <ShapeRock onClick={onShapeClick('rock')} />
                        </SStep1InnerContainer>
                    </>
                ) : (
                    <>
                        <SStep1InnerContainer className="bonus">
                            <ShapeScissor onClick={onShapeClick('scissor')} />
                        </SStep1InnerContainer>
                        <SStep1InnerContainer
                            className="bonus -mt-4 mb-6"
                            justify={'space-around'}
                        >
                            <ShapeSpock onClick={onShapeClick('spock')} />
                            <ShapePaper onClick={onShapeClick('paper')} />
                        </SStep1InnerContainer>
                        <SStep1InnerContainer className={'bonus mt-10'}>
                            <ShapeLizard
                                className="mr-[60px] bonus-shape"
                                onClick={onShapeClick('lizard')}
                            />
                            <ShapeRock onClick={onShapeClick('rock')} />
                        </SStep1InnerContainer>
                    </>
                )}
            </SStep1Container>
        </>
    )
}
