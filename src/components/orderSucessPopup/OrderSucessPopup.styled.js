import styled from "styled-components"

export const ContainerDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate (-50%, -50%);
    width: auto;
    background: #0062ff;
    background: linear-gradient(90deg, #ffffffff 0%, #e9e9e9ff 100%);
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
    border-radius: 5px;
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
                color:  #f55c5c;
            }
        }
    }

    @media screen and (min-device-width : 220px) and (max-device-width : 580px){
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      left: 0;
    }
` 