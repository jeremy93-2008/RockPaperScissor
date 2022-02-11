import * as React from 'react'
import { useMemo } from 'react'
import { SContainer } from './styled/SContainer'
import { Footer } from './templates/footer/footer'
import { Header } from './templates/header/header'
import { Main } from './templates/main/main'
import { useAtom } from 'jotai'
import { gameTypeAtom, scoreAtom } from './store'
import { STitle } from './styled/STitle'
import { Score } from './templates/score/score'
import { Game } from './templates/game/game'

export function App() {
    const [type] = useAtom(gameTypeAtom)
    const [score] = useAtom(scoreAtom)

    const title = useMemo(() => {
        const normal = ['Rock', 'Paper', 'Scissors']
        if (type === 'bonus') return [...normal, 'Lizard', 'Spock']
        return normal
    }, [type])

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
