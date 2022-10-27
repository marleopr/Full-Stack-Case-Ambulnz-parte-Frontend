import styled from "styled-components"

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100px;
  grid-column: 1/-1;
  background-color: #646464;
  background-image: linear-gradient(19deg, #646464 0%, #17171c 100%);
  `

export const HeaderImg = styled.img`
    width: 30vw;
    height: 35px;
    display: flex;
    
    @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    display: flex;
    width: 250px;
    height: 30px;
  }
  `