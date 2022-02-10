import styled from 'styled-components'

export const SStep1Container = styled.div`
    position: absolute;
    width: 50vw;
`

export const SStep1InnerContainer = styled.div<{
    justify?: string
}>`
    display: flex;
    margin-left: 25px;
    margin-right: 25px;
    justify-content: ${(props) => props.justify || 'center'};
`
