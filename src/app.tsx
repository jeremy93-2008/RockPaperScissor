import * as React from 'react'
import { useEffect, useMemo } from 'react'
import { SContainer } from './styled/SContainer'
import { Footer } from './templates/footer/footer'
import { Header } from './templates/header/header'
import { Main } from './templates/main/main'
import { useAtom } from 'jotai'
import { AppStorageKey, gameTypeAtom, scoreAtom } from './store'
import { STitle } from './styled/STitle'
import { Score } from './templates/score/score'
import { Game } from './templates/game/game'

export function App() {
    const [type] = useAtom(gameTypeAtom)
    const [score, setScore] = useAtom(scoreAtom)

    const title = useMemo(() => {
        const normal = ['Rock', 'Paper', 'Scissors']
        if (type === 'bonus') return [...normal, 'Lizard', 'Spock']
        return normal
    }, [type])

    useEffect(() => {
        const savedScore = localStorage.getItem(AppStorageKey)
        if (!savedScore) return
        setScore(Number(savedScore))
    }, [])

    return (
        <SContainer>
            <Header>
                <STitle isBonus={type === 'bonus'}>
                    {title.map((text) => (
                        <section>{text}</section>
                    ))}
                </STitle>
                <Score score={score} />
            </Header>
            <Main>
                <Game />
            </Main>
            <Footer />
        </SContainer>
    )
}
