import styled from 'styled-components'

export const SHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    width: 50vw;
    border: solid 2px hsl(217, 16%, 45%);
    border-radius: 10px;
    padding: 10px 25px 10px 25px;
    margin-top: 38px;
    @media (max-width: 640px) {
        width: 80%;
        margin-left: 5px;
    }
`
