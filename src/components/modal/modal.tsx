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
            <SModalClose className="close-btn" onClick={onClose}>
                <img className="max-w-[12px]" src={close} />
            </SModalClose>
            <div className="flex flex-col items-center">
                <h1 className="text-gray-500 uppercase mb-10 text-3xl font-bold">
                    Rules
                </h1>
                {children}
            </div>
        </SModalContainer>
    ) : null
}
