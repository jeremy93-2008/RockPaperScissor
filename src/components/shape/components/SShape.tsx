import styled, { css } from 'styled-components'

export const SShape = styled.div<{
    borderColor: string
    shadowColor: string
    className?: string
}>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 128px;
    height: 128px;
    border-radius: 50%;
    border: solid 15px ${(props) => props.borderColor};
    background-color: lightgray;
    box-shadow: inset 2px 6px 1px gray,
        2px 6px 1px ${(props) => props.shadowColor}
            ${(props) =>
                props.className && props.className.includes('winner')
                    ? ', 0 0 0 80px rgba(255,255,255,.05), 0 0 0 160px rgba(255,255,255,.05), 0 0 0 240px rgba(255,255,255,.05)'
                    : ''};
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out 0.1s;
    z-index: 4;
    @media (max-width: 640px) {
        ${(props) =>
            props.className && props.className.includes('winner')
                ? css`
                      z-index: 2;
                  `
                : css``}
        box-shadow: inset 2px 6px 1px gray,
        2px 6px 1px ${(props) => props.shadowColor}
        ${(props) =>
            props.className && props.className.includes('winner')
                ? ', 0 0 0 30px rgba(255,255,255,.05), 0 0 0 60px rgba(255,255,255,.05), 0 0 0 90px rgba(255,255,255,.05)'
                : ''};
    }
`
