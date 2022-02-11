import { IShape } from './store'

export interface IWinRules {
    you: IShape
    computer: IShape
}

export const WinRules: IWinRules[] = [
    {
        you: 'paper',
        computer: 'rock',
    },
    {
        you: 'rock',
        computer: 'scissor',
    },
    {
        you: 'scissor',
        computer: 'paper',
    },
    {
        you: 'scissor',
        computer: 'lizard',
    },
    {
        you: 'rock',
        computer: 'lizard',
    },
    {
        you: 'paper',
        computer: 'spock',
    },
    {
        you: 'spock',
        computer: 'rock',
    },
    {
        you: 'spock',
        computer: 'scissor',
    },
    {
        you: 'lizard',
        computer: 'paper',
    },
    {
        you: 'lizard',
        computer: 'spock',
    },
]
