import styled from 'styled-components'

export const SStep1Container = styled.div`
    position: absolute;
    width: 50vw;
    @media (max-width: 640px) {
        width: 100%;
    }
`

export const SStep1InnerContainer = styled.div<{
    justify?: string
}>`
    display: flex;
    margin-left: 25px;
    margin-right: 25px;
    justify-content: ${(props) => props.justify || 'center'};
    @media (max-width: 640px) {
        &.bonus {
            margin-bottom: 15px;
            &.bonus:nth-child(2) {
                justify-content: space-between;
                margin-bottom: 35px;
            }
            &.bonus:nth-child(3) {
                margin: 0 25px;
                & .bonus-shape {
                    margin-right: 25px;
                }
            }
        }
    }
`
