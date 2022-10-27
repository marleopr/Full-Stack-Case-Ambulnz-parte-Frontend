import styled from "styled-components"

export const Main = styled.div`
  box-sizing: border-box;
  width: 70vw;
  display: flex;
  flex-direction: column;
  
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        overflow: auto;
        margin: 0;
        padding: 0;
        background-color: aliceblue;
  }
  `

export const ContainerSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 70vw;
    ul{
        display: flex;
    }

    @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        margin: 0;
        padding: 0;
  }
`