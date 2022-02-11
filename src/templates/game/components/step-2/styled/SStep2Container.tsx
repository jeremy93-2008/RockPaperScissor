import styled from 'styled-components'

export const SStep2Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50vw;
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
    }
`
