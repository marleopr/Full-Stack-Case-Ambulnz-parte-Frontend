import styled from "styled-components"

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 60px;
  grid-column: 1/-1;
  background-color:white;
  background-image: linear-gradient(90deg, rgba(200,0,0,.5) 50%, transparent 50%),
  linear-gradient(rgba(200,0,0,.5) 50%, transparent 50%);
  background-size:50px 50px;
  `

export const HeaderImg = styled.img`
    width: 50vw;
    height: 45px;
    display: flex;
    @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    
    display: flex;
    width: 250px;
    height: 30px;
  }
  `