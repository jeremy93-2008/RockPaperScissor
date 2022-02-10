import styled from 'styled-components'

export const SModalClose = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    padding: 10px;
    &:active {
        background-color: lightgray;
    }
`
