import * as React from 'react'
import { useCallback, useState } from 'react'
import { SFooterContainer } from './styled/SFooterContainer'
import { SFooterBtn } from './styled/SFooterBtn'
import { Modal } from '../../components/modal/modal'

import rules from '../../assets/image-rules.svg'
import rulesBonus from '../../assets/image-rules-bonus.svg'
import { useAtom } from 'jotai'
import { gameTypeAtom } from '../../store'

export function Footer() {
    const [type, setType] = useAtom(gameTypeAtom)
    const [isModalOpen, setModalOpen] = useState(false)
    const onClickChange = useCallback(() => {
        setType((prevState) => {
            if (prevState === 'normal') return 'bonus'
            return 'normal'
        })
    }, [])
    const onClickRule = useCallback(() => {
        setModalOpen((prevModalOpenState) => !prevModalOpenState)
    }, [])
    return (
        <>
            <SFooterContainer>
                <SFooterBtn onClick={onClickChange}>Change</SFooterBtn>
                <SFooterBtn onClick={onClickRule}>Rules</SFooterBtn>
            </SFooterContainer>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <img
                    alt="Rules Image"
                    src={type === 'normal' ? rules : rulesBonus}
                />
            </Modal>
        </>
    )
}
