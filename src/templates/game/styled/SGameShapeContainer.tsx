import styled from 'styled-components'

export const SGameShapeContainer = styled.div`
    position: absolute;
    width: 50vw;
`

export const SGameShapeInnerContainer = styled.div<{
    justify?: string
}>`
    display: flex;
    margin-left: 25px;
    margin-right: 25px;
    justify-content: ${(props) => props.justify || 'center'};
`
