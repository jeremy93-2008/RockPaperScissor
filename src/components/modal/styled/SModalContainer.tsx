import styled from 'styled-components'

export const SModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    position: fixed;
    z-index: 99;
    width: 500px;
    height: 525px;
    border-radius: 10px;
    padding: 15px;
    color: black;
    top: calc(50vh - 200px);
    box-shadow: 0 0 5px hsl(229, 25%, 31%);
    @media (max-width: 640px) {
        top: 0;
        width: 100vw;
        height: 100vh;
        flex-direction: column-reverse;
        & > .close-btn {
            position: relative;
            img {
                margin-top: 50px;
                max-width: none;
            }
        }
    }
`
