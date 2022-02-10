import { atom } from 'jotai'

export type IGameType = 'normal' | 'bonus'

export const gameTypeAtom = atom<IGameType>('normal')
export const scoreAtom = atom(0)
