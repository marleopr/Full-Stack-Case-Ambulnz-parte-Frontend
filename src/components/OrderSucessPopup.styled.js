import styled from "styled-components"

export const ContainerDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    border: solid black;
    transform: translate (-50%, -50%);
    width: auto;
    background-color: white;
    > div{
        position: relative;
        width: 100%;
        height: 100%;

        .close-popup{
            position: absolute;
            top: 0;
            left: 100%;
            transform: translateX(-100%);
            padding: 2px 5px;
            width: auto;

            :hover{
                cursor: pointer;
                font-weight: bold;
                background-color: lightgray;
            }
        }
    }
` 