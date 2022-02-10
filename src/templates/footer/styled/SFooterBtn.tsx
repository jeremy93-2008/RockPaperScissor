import styled, { css } from 'styled-components'

export const SFooterBtn = styled.div<{ disabled?: boolean }>`
    display: flex;
    background: transparent;
    border: solid 1px white;
    border-radius: 8px;
    margin: 10px 25px;
    padding: 10px 45px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    ${(props) =>
        props.disabled
            ? css`
                  color: gray;
                  border-color: gray;
                  cursor: not-allowed;
                  pointer-events: none;
              `
            : css``}
`
