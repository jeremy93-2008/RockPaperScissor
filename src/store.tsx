import { atom } from 'jotai'

export type IStep = 'infinity' | 'endgame'
export type IShape = 'paper' | 'rock' | 'scissor' | 'lizard' | 'spock' | null
export type IGameType = 'normal' | 'bonus'

export const AppStorageKey = 'PaperRockScissor-Score'

export const gameTypeAtom = atom<IGameType>('normal')
export const scoreAtom = atom(0)

export const shapeSelectedAtom = atom<IShape>('paper')
export const stepAtom = atom<IStep>('infinity')
