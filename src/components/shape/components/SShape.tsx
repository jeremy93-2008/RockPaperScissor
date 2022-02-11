import styled from 'styled-components'

export const SShape = styled.div<{
    color: string
    shadowColor: string
    className: string
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 128px;
    height: 128px;
    border-radius: 50%;
    border: solid 15px ${(props) => props.color};
    background-color: lightgray;
    box-shadow: inset 2px 6px 1px gray,
        2px 6px 1px ${(props) => props.shadowColor}
            ${(props) =>
                props.className && props.className.includes('winner')
                    ? ', 0 0 0 80px rgba(255,255,255,.05), 0 0 0 160px rgba(255,255,255,.05), 0 0 0 240px rgba(255,255,255,.05)'
                    : ''};
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out 0.1s;
`
