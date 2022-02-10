import styled from 'styled-components'

export const SShape = styled.div<{ color: string; shadowColor: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 128px;
    height: 128px;
    border-radius: 50%;
    border: solid 15px ${(props) => props.color};
    background-color: lightgray;
    box-shadow: inset 2px 6px 1px gray,
        2px 6px 1px ${(props) => props.shadowColor};
    cursor: pointer;
`
