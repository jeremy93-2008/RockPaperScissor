import styled from 'styled-components'

export const SStep2Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 50vw;
    @media (max-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 250px 100px;
        align-items: flex-start;
        justify-content: center;
    }
`

export const SStep2InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    transition: opacity 0.2s ease-in-out;
    & > p {
        text-transform: uppercase;
        letter-spacing: 2px;
        padding-bottom: 25px;
        @media (max-width: 640px) {
            padding-top: 25px;
            font-size: 16px;
        }
    }
    @media (max-width: 640px) {
        flex-direction: column-reverse;
        &:nth-child(1) {
            margin-right: 64px;
        }
        &.turn-message {
            flex-direction: column;
            grid-row-start: 2;
            grid-row-end: 2;
            grid-column: 1 / 3;
        }
    }
`
