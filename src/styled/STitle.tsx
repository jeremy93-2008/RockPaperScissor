import styled from 'styled-components'

export const STitle = styled.div<{ isBonus: boolean }>`
    height: ${(props) => (props.isBonus ? '200px' : '100%')};
    & section {
        font-size: 42px;
        margin-bottom: -30px;
        text-transform: uppercase;
        @media (max-width: 640px) {
            font-size: 12px;
            margin-bottom: -8px;
        }
    }
    @media (max-width: 640px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        flex: 4;
    }
`
