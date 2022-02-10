import styled from 'styled-components'

export const STitle = styled.div<{ isBonus: boolean }>`
    height: ${(props) => (props.isBonus ? '200px' : '100%')};
    & section {
        font-size: 42px;
        margin-bottom: -30px;
        text-transform: uppercase;
    }
`
