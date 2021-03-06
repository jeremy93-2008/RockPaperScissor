import styled from 'styled-components'

export const SScoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    color: black;
    padding: 20px 60px;
    border-radius: 15px;
    & > section {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 640px) {
        flex: 1;
        padding: 0 32px;
    }
`
