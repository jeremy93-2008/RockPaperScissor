import * as React from 'react'
import { SModalContainer } from './styled/SModalContainer'
import { SModalClose } from './styled/SModalClose'
import close from '../../assets/icon-close.svg'

interface IModalProps extends JSX.ElementChildrenAttribute {
    isOpen: boolean
    onClose: () => void
}

export function Modal({ isOpen, onClose, children }: IModalProps) {
    return isOpen ? (
        <SModalContainer>
            <SModalClose onClick={onClose}>
                <img className="max-w-[12px]" src={close} />
            </SModalClose>
            {children}
        </SModalContainer>
    ) : null
}
